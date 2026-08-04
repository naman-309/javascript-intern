
// 
import { resourceUsage } from "node:process";
import { pool } from "../../../db/db.js";
import { error } from "node:console";
import { json } from "node:stream/consumers";

// to get  the  data  for db 
export const getUser = async (req, res) => {

    try {
        const [userData] = await pool.query("select * from users")
        console.log("data fatched ", userData)

        res.json({
            message: " data  fatched  sucesfully ",
            data: userData
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            message: "failed to get  user data ",
            error: message.err

        })
    }
}
// post  api 

export const createUser = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const query = `insert into users  (name  , email , password)  values(?,? ,?)`
        const [result] = await pool.query(query, [name, email, password])
        res.json({
            message: "  user  data  added ",
            data: result
        })
    }
    catch (err) {
        res.json({
            message: "failed to add user ",
            error: err.message
        })
    }

}

// put  api - to update  the  data
//flow - first check exist  or  not then update  the  data  

export const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user exists using the email
        const [existingUsers] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);

        if (existingUsers.length === 0) {
            res.json({ message: "User data not found" });
        }

        // Update only that specific user using a WHERE clause
        const query = `UPDATE users SET name = ?, password = ? WHERE email = ?`;
        const [result] = await pool.query(query, [name, password, email]);
        // console.log(result)
        // Confirm the update was successful
        if (result.affectedRows === 1) {
            res.json({ message: "Data updated successfully" });
        }

        res.json({ message: "Update failed" });

    } catch (err) {
        console.error(err);
        res.json({ message: "Internal server error" });
    }
};
// delete api
export const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        // Check whether the user exists
        const [existingUser] = await pool.query(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );

        if (existingUser.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Delete the user
        const [result] = await pool.query(
            `DELETE FROM users WHERE email = ?`,
            [email]
        );

        if (result.affectedRows === 1) {
            return res.status(200).json({
                message: "User deleted successfully"
            });
        }

        return res.status(500).json({
            message: "User could not be deleted"
        });

    } catch (err) {
        console.log("Delete user error:", err);

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });

    }
};