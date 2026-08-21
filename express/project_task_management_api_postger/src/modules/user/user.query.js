import pool from "../../db/db.js";

export const getUserById = async (id) => {
    const result = await pool.query(
        `SELECT id, name, email, role, created_at
         FROM users
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
};
// update  user  
export const updateUser = async (id, name, email) => {
    const result = await pool.query(
        `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email, created_at`,
        [name, email, id]
    );
    return result.rows[0];
};


//delete  user  
export const deleteUserQuery = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};