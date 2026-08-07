import jwt from "jsonwebtoken"
export const verifyAuth = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.json({ message: "auth header is  reuqierd " })
        }
        const token = authHeader.split(" ")[1]
        const decodedToken = jwt.verify(token, "namankkr")

        //save  the  decoded user  information in req.user 
        req.user = decodedToken
        // continue  
        next()
    } catch (error) {
        console.log(error)
        return res.json({ message: "invalid or expired token" })
    }
}