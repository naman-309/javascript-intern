
import pool from "../../db/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// function to register  

export const userRegister = async (req, res) => {
    try {
        const { name, email } = req.body
        let { password } = req.body

        if (!name || !email || !password) {
            res.json({ message: " all fildes are required " })
        }

        const [data] = await pool.query("select  * from users where  email = ? ", [email])

        if (data.length > 1) {
            res.json({ message: "user  with this  mail already exist" })
        }

        const query = (`insert into users (name  , email , password)
                        values(?,?,?)`)

        const hashpassword = await bcrypt.hash(password, 10)
        password = hashpassword
        const [result] = await pool.query(query, [name, email, password])

        if (result.affectedRows === 1) {
            res.json({
                message: "user  registration succesfully",
                userID: result.insertId
            })

        }
    } catch (err) {
        console.log(err)
    }

}


export const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!password || !email) {
            res.json({ message: " all fileds are  required to fill" })
        }


        const [data] = await pool.query("select  * from users where  email = ?", [email])
        if (data.length === 0) {
            res.json({ message: "user  not  fould  with entred mial" })
        }

        const user = data[0]
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            res.json({ message: "invalid password " })
        }

        // if password  matches  add the  tokend i response  
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email },
            "namankkr",
            { expiresIn: "1h" }
        )

        // now send  response  to the user  

        return res.json({
            message: "user  loggid in sucesfully",
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })







    } catch (error) {
        console.log(error)

    }
}

// to get  the  user profle 

export const getProfile = async (req, res) => {
    try {
        const id = req.user.id;
        const [users] = await pool.query(
            `SELECT id, name, email FROM users WHERE id = ?`,
            [id]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: "Profile fetched successfully",
            profile: users[0]
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Profile error" });
    }
};

// not imp  but  just  to get all users 
export const getAllUsers = async (req, res) => {
    try {
        const [users] = await pool.query(
            "SELECT id, name, email FROM users"
        );

        return res.json({
            message: "Users fetched successfully",
            users: users
        });

    } catch (error) {
        console.log("Get users error:", error);

        return res.json({
            message: "Internal server error"
        });
    }
};