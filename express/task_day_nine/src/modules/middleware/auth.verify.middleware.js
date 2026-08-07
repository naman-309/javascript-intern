import jwt from 'jsonwebtoken';

// 1. Added 'next' parameter here
export const authVerify = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            // Good practice: Use status codes for errors (401 Unauthorized)
            return res.status(401).json({ message: "token nhi mila" });
        }

        const decodedToken = jwt.verify(token, 'dev_naman');

        // 2. Attach the user data to the request object
        req.user = decodedToken;

        // 3. REMOVED the early res.json return statement
        // 4. Call next() properly to pass control to the controller
        next();

    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: "Something went wrong or invalid token" });
    }
};
