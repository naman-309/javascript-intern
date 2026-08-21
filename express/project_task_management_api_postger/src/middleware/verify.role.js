

export const verifyRole = (...roles) => {

    return (req, res, next) => {

        const allowedRoles = roles.flat();


        if (!allowedRoles.includes(req.user.role)) {

            res.json({ message: " you are  not  authorised to perform this action" })
        }

        next()
    }


}

