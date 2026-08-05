import jwt from "jsonwebtoken";

export const verifyAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check Authorization header received or not
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Authorization header is required"
            });
        }

        // Take token from: "Bearer actualToken"
        const token = authHeader.split(" ")[1];

        console.log("Token:", token);

        // Verify token
        const decodedToken = jwt.verify(token, "namankkr");

        console.log("Decoded token:", decodedToken);

        // Attach logged-in user information to request
        req.user = decodedToken;

        // Run next middleware/controller
        next();

    } catch (err) {
        console.log("Authentication error:", err.message);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};