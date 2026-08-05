import bcrypt from "bcrypt"
import pool from "../../db/db.js"
import jwt from "jsonwebtoken";
// register post  api
export const userRegister = async (req, res) => {

    try {
        const { name, email } = req.body
        let { password } = req.body

        //basic validation 

        if (!name || !email || !password) {
            return res.json({
                message: "all fileds are  required to fill"
            })
        }

        //to check email alreay exisit  or not
        const [data] = await pool.query("select*from users where email = ?", [email])
        if (data.length > 0) {
            return res.json({ message: "user exisit  with this mail" })
        }

        //main code  

        const hashPassword = await bcrypt.hash(password, 10)
        // console.log(hashPassword)
        //resign kr diya 
        password = hashPassword
        const [result] = await pool.query("insert  into users (name  , email , password )values(?,?,?)", [name, email, password])

        return res.json({ message: "user  registered  succesfully" })
    }
    catch (err) {
        console.log(err)
    }

}

// login  code 
export const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        //valiation 
        if (!email || !password) {
            res.json({ message: "all filed are  req to fill" })
        }
        // check mail
        const [data] = await pool.query("select *from users where  email = ?", [email])
        if (data.length === 0) {
            res.json({ message: "this  mail. not  exisit" })
        }

        // main code  
        const user = data[0]
        const isPaswordValid = await bcrypt.compare(password, user.password)
        // console.log(user.password)
        if (!isPaswordValid) {
            res.json({ message: "invalid  pass" })
        }

        const accessToken = jwt.sign(
            { id: user.id, name: user.name, password: user.password },
            "interinfotech",
            { expiresIn: "1h" }
        )
        console.log("this  is token: ", accessToken)
        res.json({ message: "user loged in successfully", token: accessToken })

    }
    catch (err) {
        console.log(err)
    }
}



// get user profile  with token  
export const userProfile = async (req, res) => {

    try {

        const user = req.user
        console.log(user)

        return res.json({
            message: "user profile",
            user: user
        })

    } catch (error) {
        console.log(error)

        return res.json({
            message: "something went wrong"
        })
    }
}





/// get all user  
export const getAllUsers = async (req, res) => {
    // const { name, email, password } = req.body

    try {
        const [data] = await pool.query("select id, name, email , password from users")
        if (data.length > 0) {
            res.json({
                message: "all users data",
                data: data
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}
