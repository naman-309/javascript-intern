import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    try {
        // cookie-parser cookies ko req.cookies me rakhta hai
        const token = req.cookies.chat_token;

        if (!token) {
            return res.status(401).json({
                message: "Please login first"
            });
        }

        // Cookie ke JWT ko verify karna
        const decodedUser = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Decoded user ko request me attach karna
        req.user = decodedUser;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};