
import jwt from "jsonwebtoken"
export const authVerify = (req, res, next) => {
    try {

        const token = req.cookies.accessToken;

        console.log("token form cookies :", token)
        if (!token) {
            return res.json({ message: "auth cookie is required" })
        }

        const decodedToken = jwt.verify(token, "namankkr")

        req.user = decodedToken

        next()
    } catch (err) {
        console.log(err)
        return res.json({ message: "Invalid or expired token" })

    }
}

