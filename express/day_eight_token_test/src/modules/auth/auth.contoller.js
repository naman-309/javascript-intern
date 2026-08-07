

import { hash } from "node:crypto";
import pool from "../../db/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// to add the user ....
export const userRegister = async (req, res) => {
    try {
        const { name, email } = req.body
        let { password } = req.body

        // validate  
        if (!name || !email || !password) {
            res.json({
                message: "all fileds  are  required"
            })
        }
        /// to check email exsit  or  not  

        const [data] = await pool.query("select * from users where email =?", [email])
        if (data.length === 1) {
            res.json({ message: "this  emial already exisit" })
        }

        // main quer to make  user 
        const hashPassword = await bcrypt.hash(password, 10)
        password = hashPassword
        const [result] = await pool.query("insert into users(name , email , password) values(?,?,?)", [name, email, password])
        if (result.affectedRows === 1) {
            res.json({ message: "user registered successfully", data: result })
        }
    }
    catch (err) {
        console.log(err)
    }
}
// to login  in user  

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check whether user exists
        const [data] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (data.length === 0) {
            return res.status(404).json({
                message: "User not found with this email"
            });
        }

        const user = data[0];

        // Compare entered password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            });
        }

        // send access token if  user  logged in 

        const accessToken = jwt.sign({ id: user.id, name: user.name }, "namankkr", { expiresIn: "1h" })
        console.log("Access Token", accessToken)

        return res.json({
            message: "User logged in successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                token: accessToken
            }
        });

    } catch (err) {
        console.log("Login error:", err);

        return res.json({
            message: "Internal server error"
        });
    }
};

// to get  profile  deatails  after verification 

export const getProfile = async (req, res) => {

    try {
        const user = req.user
        console.log(user)
        res.json({ message: "user profile ", profile: user })

    } catch (error) {
        console.log(error)

    }
}

// to update  user  profile 
export const updateUserProfile = async (req, res) => {

    try {

        const { name, email } = req.body
        let { password } = req.body
        const user = req.user
        const id = user.id

        if (!id) {
            res.json({ message: "id  not found" })
        }

        const hashpassword = await bcrypt.hash(password, 10)
        password = hashpassword
        const query = "update users set name = ? , email = ? , password = ? where id= ?"
        const [result] = await pool.query(query, [name, email, password, id])
        if (result.affectedRows === 1) {
            res.json({
                message: "user profile updated succesfully"

            })
        }
        else {
            res.json({ message: "failed  to update the  profile" })
        }



    } catch (error) {
        console.log(error)
    }
}

// special for chnage  password  patch api 
export const chnagePassword = async (req, res) => {

    try {

        const { oldPassword, newPassword } = req.body
        const user = req.user
        const id = user.id
        if (!oldPassword || !newPassword) {
            res.json({ message: "all filed are  requied" })
        }

        const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
        const data = result[0]

        const isPassValid = await bcrypt.compare(oldPassword, data.password)
        if (!isPassValid) {
            res.json({ message: "invalid old password" })
        }
        const hashPassword = await bcrypt.hash(newPassword, 10)
        let password = hashPassword

        const [finalResult] = await pool.query("update users set password = ?where  id  = ?", [password, id])

        if (finalResult.affectedRows === 1) {
            res.json({
                message: "user  password  updated successfully"
            })
        }
        else {
            res.json({ message: "failed to chnage  password" })
        }


    } catch (err) {
        console.log(err)

    }
}


// to delete  the  user  

export const delteUser = async (req, res) => {
    try {

        const user = req.user
        const id = user.id

        const [data] = await pool.query("delete from users where  id =?", [id])
        if (data.affectedRows) {
            res.json({ message: "deleted sucessfully" })
        }
    } catch (error) {
        console.log(error)
    }
}