// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

import { findUserByEmail, createUser, findUserById } from "./auth.query.js";
// Function for user registration
export const userRegistration = async (req, res) => {
    try {
        const { name, email } = req.body;
        let { password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.json({
                message: "All fields are required"
            });
        }
        // Check  email already exists
        const data = await findUserByEmail(email);

        if (data.length > 0) {
            return res.json({
                message: "This email already exists"
            });
        }

        // make  hash password
        const hashPassword = await bcrypt.hash(password, 10);
        password = hashPassword;

        // Create user - mian 
        const result = await createUser(name, email, password);

        if (result.affectedRows === 1) {
            res.json({
                message: "User registered successfully",
                data: result
            });
        }

    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong"
        });
    }
};


// Function for user login
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.json({
                message: "All fields are required to fill "
            });
        }

        //  query function form q.js file 
        const data = await findUserByEmail(email);

        if (data.length === 0) {
            return res.json({
                message: "User not found with this email"
            });
        }

        // data[0] contains user info ...  
        const user = data[0];

        // Compare entered password with database password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            });
        }

        // Generate access token take  3  parmeter - 
        const accessToken = jwt.sign(
            {
                id: user.id,
                name: user.name
            },
            "dev_naman",
            {
                expiresIn: "1h"
            }
        );

        // we  use  cookies  to  send token insited of  sending it  in respose
        // phle  do key and value hai then  one  obj define  the  life and  protocals of cookies 
        // to prevermt  direct  access by using js methds

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.json({ message: "User logged in successfully", });
        // tokken stored in cookies
    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong"
        });
    }
};


export const userProfile = async (req, res) => {
    try {

        // user from payload we got while  login form token 
        const user = req.user
        console.log(user)
        res.json({ message: "user profile ", profile: user })

    } catch (error) {


        console.log(error)

    }
}
// Update user profile using ID from JWT token
export const updateUserProfile = async (req, res) => {
    try {
        const id = req.user?.id; // Safe navigation in case req.user is undefined
        const { name, email, password } = req.body;
        if (!id) {
            return res.status(401).json({ message: "Unauthorized: Missing user ID" });
        }

        if (!name && !email && !password) {
            return res.status(400).json({ message: "Provide at least one field to update" });
        }

        // 1. Verify user exists and fetch their current details
        const existingUser = await findUserById(id);
        if (!existingUser || existingUser.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // 2. Build dynamic update object to avoid overwriting with undefined values
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;

        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        // 3. Persist partial changes to the database
        await updateUserById(id, updateData);

        return res.status(200).json({ message: "User profile updated successfully" });
    } catch (error) {
        console.error("Profile update error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
