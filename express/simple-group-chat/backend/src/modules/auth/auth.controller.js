// Register, login, logout, and profile controllers will be added step by step.


import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "./auth.model.js";
import jwt from "jsonwebtoken";



// user register 
export const registerUser = async (req, res) => {
    try {
        // React/Postman se aane wali values
        let { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        // Extra spaces remove karna
        name = name.trim();

        // Email ko lowercase me convert karna
        email = email.trim().toLowerCase();

        // Name validation
        if (name.length < 2) {
            return res.status(400).json({
                message: "Name must contain at least 2 characters"
            });
        }

        // Password validation
        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must contain at least 6 characters"
            });
        }

        // Check whether email already exists
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(409).json({
                message: "Email is already registered"
            });
        }

        // Password ko hash karna
        const hashedPassword = await bcrypt.hash(password, 10);

        // User ko database me save karna
        const newUser = await createUser(
            name,
            email,
            hashedPassword
        );

        return res.status(201).json({
            message: "Registration successful",
            user: newUser
        });

    } catch (error) {
        console.log("Registration error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


//login 
export const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // email = email.trim().toLowerCase();

        // Database me user find karo
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Entered password ko hashed password se compare karo
        const passwordMatched = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatched) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // JWT create karo
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        const isProduction =
            process.env.NODE_ENV === "production";

        // JWT ko HttpOnly cookie me save karo
        res.cookie("chat_token", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log("Login error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


// get  profile 

export const getProfile = async (req, res) => {

    const user = req.user;
    //console.log("Authenticated user:", user);
    return res.json({
        message: "profile  fatched sucessfully",
        user: user
    })
}

// logout user

export const logoutUser = (req, res) => {
    res.clearCookie("chat_token", {
        httpOnly: true,
        sameSite: "lax"
    })
    return res.json({
        message: "logout sucessfull"
    })
}

