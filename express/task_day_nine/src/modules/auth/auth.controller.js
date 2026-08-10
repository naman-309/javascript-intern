import { userRegisterQuery, userLoginQuery, updateUserQuery, findUserByEmail, updatePasswordQuery, findUserById, deleteUserQuery } from "./auth.query.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import pool from "../../db/db.js";

// register  function 
export const registerUser = async (req, res) => {

    try {
        const { name, email } = req.body
        let { password } = req.body

        if (!name || !email || !password) {
            return res.json({ message: "all fileds are  required" })
        }

        //check user  exiit  or not  
        const user = await findUserByEmail(email)

        if (user.length > 0) {
            res.json({ message: "user  already exist  with this email" })
        }


        // main part  - insert the  user in db 

        // hash the  pass 
        const hashPassword = await bcrypt.hash(password, 10)
        password = hashPassword
        // then  insert  the  data 
        const result = await userRegisterQuery(name, email, password)

        if (result.affectedRows === 1) {
            res.json({ message: "user  register successfully" })
        }

    } catch (error) {

        console.log(error)
        res.json({ message: "internal server  error" })

    }
}

// login function 

export const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        //  basic validations 
        if (!email || !password) {
            res.json({
                message: "all fildes are required"
            })
        }

        // check emial exisit  or not 
        const users = await findUserByEmail(email)
        if (users.length === 0) {
            res.json({ message: "user not found" })
        }

        // main  - part 
        const user = users[0]

        // compare  the  pass 
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.json({ message: "incorrect password" })
        }



        // make  token 
        const accessToken = jwt.sign({ id: user.id, name: user.name, email: user.email, password: user.password }, "namankkr", { expiresIn: "1h" })
        console.log(accessToken);

        // send  token in  cookies  - add  middleware  in app to read cookie
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })

        res.json({
            message: "user login successfully"
        })




    } catch (error) {
        console.log(error)
        return res.json({ message: "internal server error" })

    }
}


// profie function 
export const userProfile = async (req, res) => {
    try {

        const user = req.user
        console.log(user)
        res.json({ message: "user profile", profile: user })
    } catch (error) {

        console.log(error)
    }
}

// update funtion 

export const updateUser = async (req, res) => {
    try {

        const { name, email, password } = req.body
        const id = req.user.id
        // validation
        const user = await findUserByEmail(req.user.email)
        if (user.length === 0) {
            return res.json({ message: 'user not found' })
        }
        const hashPass = await bcrypt.hash(password, 10)
        const result = await updateUserQuery(name, email, hashPass, id)

        if (result.affectedRows === 1) {
            return res.json({ message: "user data updated successfully" });
        } else {
            return res.json({ message: "update failed or no changes made" });
        }


    } catch (error) {
        console.log(error)
    }
}

// update  pass function;

export const updatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const id = req.user.id;

        if (!oldPassword || !newPassword) {
            res.json({ message: "All fields are required" });
        }

        const user = await findUserById(id);
        if (!user) {
            res.json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            res.json({ message: "Current password does not match" });
        }

        const password = await bcrypt.hash(newPassword, 10);
        await updatePasswordQuery(id, password);


        res.clearCookie("accessToken")

        res.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        res.json({ message: "Internal server error" });
    }
};


//delete user function 

export const deleteUser = async (req, res) => {

    try {

        const { id } = req.user

        if (!id) {
            return res.json({ message: "user  not found" })
        }

        const result = await deleteUserQuery(id)

        if (result.affectedRows === 1) {
            return res.json({ message: "user deleted sucessfully" })
        }
        else {
            return res.json({ message: "user not found " })
        }
    } catch (error) {

        console.log(error)
        return res.json({ message: "message  internal server error" })
    }
}


//  logout  function  // wipe up the  cookie  only  no acutal data 


export const userlogOut = async (req, res) => {
    try {

        const { email } = req.user
        if (!email) {
            res.json({ message: "user  not found" })
        }

        res.clearCookie("accessToken");
        return res.json({
            message: "User logout successfully"
        });




    } catch (error) {
        console.log(error)

    }
}