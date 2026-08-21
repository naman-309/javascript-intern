
import jwt from "jsonwebtoken"
export const authVerify = (req, res, next) => {


    try {
        const token = req.cookies.token

        if (!token) {
            res.json({ message: "cooies  not have token " })


        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        console.log(error)

        res.json({
            message: "Invalid or expired token"
        });

    }
}