

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

export const getProfile = async (req, res) => {


    try {
        const user = req.user
        console.log(user)
        res.json({ message: "user profile ", profile: user })

    } catch (error) {
        console.log(error)

    }
}