import jwt from "jsonwebtoken"

export const authVerify = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization

        // basic validation
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.json({ message: "auth header is requied" })
        }

        const token = authHeader.split(" ")[1]
        console.log(token)

        const decodedToken = jwt.verify(token, "interinfotech")	
        console.log(decodedToken)

        req.user = decodedToken
        next()

    } catch (error) {
        console.log(error)
        return res.json({ message: "invalid token" })
    }
}