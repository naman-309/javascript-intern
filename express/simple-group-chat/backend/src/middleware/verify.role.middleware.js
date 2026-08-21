// We will build verifyRole(["admin"]) here during the authorization step.

export const verifyRole = (allowedRoles = []) => {

    return (req, res, next) => {
        const role = req.user.role

        if (!allowedRoles.includes(role)) {

            return res.json({
                message: "access  denied ! you are  not  authorised  to perform this  action "
            })
        }
        next()
    }
}