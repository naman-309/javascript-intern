import { registerUserQuery, checkEmail } from './auth.query.js';
import bcrypt from 'bcrypt';
import pool from '../../db/db.js';
import jwt from "jsonwebtoken"

/// register user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if email already exists
        const data = await checkEmail(email);

        if (data.length > 0) {
            return res.status(409).json({
                message: "User already exists with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const rows = await registerUserQuery(
            name,
            email,
            hashedPassword
        );

        if (rows.length > 0) {
            return res.status(201).json({
                message: "User registered successfully",
                user: rows[0]
            });
        }

        return res.status(400).json({
            message: "Registration failed"
        });

    } catch (error) {
        console.error("registerUser error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

//login user 

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.json({ message: "all fildes are required" })
        }

        // check email exist  or not   
        const data = await checkEmail(email)
        if (data.length === 0) {
            res.json({ message: "mail not  found  " })
        }

        const user = data[0]

        const isPassWordValid = await bcrypt.compare(password, user.password)

        if (!isPassWordValid) {
            res.json({
                message: "invalid pass"
            })
            console.log("logged in faail")
        }

        const accessToken = jwt.sign({ id: user.id, name: user.name, email: user.email }, "naman", { expiresIn: "1h" })
        console.log("Token :", accessToken)



        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        })


        res.json({
            message: "user looged in sucessfully",
            // token: accessToken
        })
        console.log("logged in success")
    }
    catch (err) {
        console.log(err)
    }

}


// profile user  

export const userProfile = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData)
        res.json({ message: "user profile", data: userData })

    } catch (error) {
        console.log(error)
    }
}


// logout  user 

export const logOutUser = async (req, res) => {

    const { email } = req.user
    res.clearCookie("accessToken");
    return res.json({
        message: "User logout successfully"
    });

}

// delete  user  

export const deleteUser = async (req, res) => {
    try {

        const { id } = req.user
        if (id.length > 1) {


        }

    } catch (error) {

        console.log(error)
    }
}