// Authentication-related PostgreSQL queries will be added here.

import pool from "../../config/db.js";

// Check karega ki email pehle se registered hai ya nahi
export const findUserByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    return result.rows[0];
};

// New user database me insert karega
export const createUser = async (name, email, hashedPassword) => {
    const result = await pool.query(
        `INSERT INTO users (name, email, password)
         VALUES ($1, $2, $3)
         RETURNING id, name, email, role, created_at`,
        [name, email, hashedPassword]
    );

    return result.rows[0];
};

