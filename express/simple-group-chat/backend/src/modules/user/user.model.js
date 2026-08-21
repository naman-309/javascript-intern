// User-related PostgreSQL queries will be added here.



import pool from "../../config/db.js";

// get  all users from the database
export const findAllUsers = async () => {

    const result = await pool.query(
        `SELECT id, name, email, role
         FROM users`
    );

    return result.rows;
}

// delete  user by id from the database
export const deleteUserById = async (userId) => {
    const result = await pool.query(
        `DELETE FROM users
         WHERE id = $1
         RETURNING id, name, email, role`,
        [userId]
    );

    return result.rows[0];
}


// 