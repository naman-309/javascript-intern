

import jwt from "jsonwebtoken"


export const authVerify = (req, res, next) => {

    try {
        const token = req.cookies.accessToken
        console.log("token form cookies :", token)
        if (!token) {
            res.json({ message: "auth cookies is req" })
        }

        const decodedToken = jwt.verify(token, "naman")
        req.user = decodedToken
        next()
    }
    catch (err) {
        console.log(err)
        res.json({ message: "token  expired" })
    }

}