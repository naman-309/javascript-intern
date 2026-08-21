import jwt from "jsonwebtoken";
export const socketAuth = (socket, next) => {
    try {
        const cookieHeader =
            socket.handshake.headers.cookie;

        if (!cookieHeader) {
            return next(
                new Error("Please login first")
            );
        }

        const tokenCookie = cookieHeader
            .split("; ")
            .find((item) =>
                item.startsWith("chat_token=")
            );

        if (!tokenCookie) {
            return next(
                new Error("Token not found")
            );
        }

        const token = tokenCookie.split("=")[1];

        const decodedUser = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        socket.user = decodedUser;

        // Connection ko handler tak bhejega
        next();

    } catch (error) {
        next(
            new Error("Invalid or expired token")
        );
    }
};