import {
    findUserByEmail,
    createUser,
    findUserForLogin
} from "./model.js";

// Signup controller
export const signupUser = async (req, res) => {
    try {
        // Frontend se data receive kiya
        const { name, email, password } = req.body;

        // Basic empty field check
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        // Email database mein already hai ya nahi
        const existingUsers = await findUserByEmail(email);

        // User already exists
        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // New user create kiya
        const result = await createUser(
            name,
            email,
            password
        );

        // Success response
        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            userId: result.insertId
        });

    } catch (error) {
        console.log("Signup error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

// Login controller
export const loginUser = async (req, res) => {
    try {
        // Frontend se data receive kiya
        const { email, password } = req.body;

        // Empty field check
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter email and password"
            });
        }

        // Database mein user search kiya
        const users = await findUserForLogin(
            email,
            password
        );

        // Matching user nahi mila
        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // First matching user
        const user = users[0];

        // Login success response
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: user
        });

    } catch (error) {
        console.log("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};