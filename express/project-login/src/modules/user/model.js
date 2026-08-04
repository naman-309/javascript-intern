import db from "../../db/db.js";

// Email se user search karna
export const findUserByEmail = async (email) => {
    const sql = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

    // Promise-based query
    const [users] = await db.query(sql, [email]);

    return users;
};

// New user database mein create karna
export const createUser = async (name, email, password) => {
    const sql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.query(sql, [
        name,
        email,
        password
    ]);

    return result;
};

// Login ke liye email aur password match karna
export const findUserForLogin = async (email, password) => {
    const sql = `
        SELECT id, name, email
        FROM users
        WHERE email = ? AND password = ?
    `;

    const [users] = await db.query(sql, [
        email,
        password
    ]);

    return users;
};