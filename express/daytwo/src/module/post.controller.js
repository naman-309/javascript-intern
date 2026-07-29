import { users } from "../db/db.js"
const createUser = (req, res) => {
    const { name, age, email } = req.body

    // const { name, age, email } = Object.keys(req.body)

    const userData = {
        name, age, email
    }
    console.log(userData)
    users.push(userData)
    res.json({
        message: "data  registred sucessfully"
    })
}
export { createUser }
