import pool from "../../db/db.js";

// fid user by email que..
export const findUserByEmail = async (email) => {
    const [data] = await pool.query("select * from  users where email = ?", [email]
    );

    return data;
};


// inster  new user quee..
export const createUser = async (name, email, password) => {
    const [result] = await pool.query("insert into users(name, email, password) VALUES (?, ?, ?)", [name, email, password]);

    return result;
};


// find  by id 
export const findUserById = async (id) => {
    const [data] = await pool.query("select * from users WHERE id = ?", [id]);

    return data;
};