import bcrypt from "bcrypt";

import {
    findUserByEmail,
    createUser
} from "./auth.query.js";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // check fields
        if (!name || !email || !password) {
            return res.json({
                message: "All fields are required"
            });
        }


        // check existing user
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.json({
                message: "Email already registered"
            });
        }


        // hash password - 
        const hashedPassword = await bcrypt.hash(password, 10);


        // create user
        const user = await createUser(
            name,
            email,
            hashedPassword
        );


        res.json({
            message: "User registered successfully",
            user: user
        });


    } catch (error) {

        console.log(error);

        res.json({
            message: "Something went wrong"
        });

    }
};


export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                message: "Email and password are required"
            });
        }


        // find user
        const user = await findUserByEmail(email);

        if (!user) {
            return res.json({
                message: "User not found"
            });
        }


        // compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.json({
                message: "Invalid password"
            });
        }


        // create token
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,  // use to secure  the  key
            {
                expiresIn: "1d"
            }
        );

        // console.log(user)

        // store token in cookie
        res.cookie("token", token, {
            httpOnly: true
            // smore  more  key are  here  but  for now  infuf
        });

        res.json({
            message: "Login successful"
        });

    } catch (error) {

        console.log(error);

        res.json({
            message: "Something went wrong"
        });

    }
};


export const logout = async (req, res) => {
    try {
        res.clearCookie("token");

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

