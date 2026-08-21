

// for  qyery 

import pool from "../../db/db.js";

// to chck thje  exsiting user by email 

export const findUserByEmail = async (email) => {
    const result = await pool.query(`select * from users  where email = $1`, [email])
    return result.rows[0]

}

// to  add  the  user  
export const createUser = async (name, email, password) => {
    const result = await pool.query(
        `INSERT INTO users (name, email, password)
         VALUES ($1, $2, $3)
         RETURNING id, name, email, created_at`,
        [name, email, password]
    );

    return result.rows[0];
};



// get profile  
export const getUserById = async (id) => {
    const result = await pool.query(
        `select id , name  , email , created_at from users where id  = $1 `, [id]
    )
    return result.rows[0]
}