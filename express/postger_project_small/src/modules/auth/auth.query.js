import pool from '../../db/db.js';
export const registerUserQuery = async (name, email, password) => {
    const result = await pool.query(
        `INSERT INTO users (name, email, password)
         VALUES ($1, $2, $3)
         RETURNING id, name, email`,
        [name, email, password]
    );

    return result.rows;
};
// Check whether email exists
export const checkEmail = async (email) => {
    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        return result.rows;

    } catch (error) {
        console.error("checkEmail error:", error);
        throw error;
    }
};

//  delelte  qyeery 

export const deleteQuery = async (id) => {
    try {
        const result = await pool.query("delete  from users where  id =$1", [id])
    } catch (error) {
        console.log(error)
    }
}