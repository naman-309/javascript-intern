import bcrypt from "bcrypt"
import pool from "../../db/db.js"
import { bytes, json } from "node:stream/consumers"




/// get all user  
export const getAllUsers = async (req, res) => {
    // const { name, email, password } = req.body

    try {
        const [data] = await pool.query("select id, name, email , password from users")
        if (data.length > 0) {
            res.json({
                message: "all users data",
                data: data
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

// register post  api
export const userRegister = async (req, res) => {

    try {
        const { name, email } = req.body
        let { password } = req.body

        //basic validation 

        if (!name || !email || !password) {
            return res.json({
                message: "all fileds are  required to fill"
            })
        }

        //to check email alreay exisit  or not
        const [data] = await pool.query("select*from users where email = ?", [email])
        if (data.length > 0) {
            return res.json({ message: "user exisit  with this mail" })
        }

        //main code  

        const hashPassword = await bcrypt.hash(password, 10)
        // console.log(hashPassword)
        //resign kr diya 
        password = hashPassword
        const [result] = await pool.query("insert  into users (name  , email , password )values(?,?,?)", [name, email, password])

        return res.json({ message: "user  registered  succesfully" })
    }
    catch (err) {
        console.log(err)
    }

}

// login  code 
export const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        //valiation 
        if (!email || !password) {
            res.json({ message: "all filed are  req to fill" })
        }
        // check mail
        const [data] = await pool.query("select *from users where  email = ?", [email])
        if (data.length === 0) {
            res.json({ message: "this  mail. not  exisit" })
        }

        // main code  
        const user = data[0]
        const isPaswordValid = await bcrypt.compare(password, user.password)
        // console.log(user.password)
        if (!isPaswordValid) {
            res.json({ message: "invalid  pass" })
        }
        else {
            res.json({ message: "user loged in successfully" })
        }
    }
    catch (err) {
        console.log(err)
    }
}

// put - to update  the  user  data

export const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const [data] = await pool.query("select * from users where email = ?", [email]);
        if (data.length === 0) {
            return res.status(404).json({ message: "user not found from this mail" });
        }

        let hashPassword = await bcrypt.hash(password, 10);
        const [result] = await pool.query("update users set name = ?, password = ? where email = ?", [name, hashPassword, email]);

        if (result.affectedRows === 1) {
            return res.status(200).json({ message: "user data updated successfully" });
        } else {
            return res.status(500).json({ message: "not updated error" });
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "server error" });
    }
};


// delete  user  
export const deleteUser = async (req, res) => {

    try {
        const { name, email, password } = req.body
        if (!email || password) {
            res.json({ message: "all filed are  requeired " })
        }

        const [data] = await pool.query("select *from users where  email= ?", [email])
        if (data.length === 0) {
            res.json({ message: "user not  found to this mail" })
        }

        const [result] = await pool.query("delete  from users  where  email = ?", [email])
        if (result.affectedRows === 1) {
            res.json({ message: "user deleted  sucesfully" })
        }
        else {
            res.json({ message: "something went worng" })
        }

    } catch (er) {
        console.log("this  is catch err", er)
    }
}


// patch by  params  

export const updateUserByPatch = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const { id } = req.params



        const [result] = await pool.query("update  users set  name  = ? ,email = ? ,password = ? where id =?", [name, email, password, id])
        console.log("this  is id:", id)
        if (result.affectedRows === 0) {
            res.json({ message: "user not  found  with is id" })
        }
        res.json({
            message: "user data  udated  by patch id",
            data: result
        })


    } catch (err) {
        console.log(err)
        res.json({ message: "catch error" })
    }

}

