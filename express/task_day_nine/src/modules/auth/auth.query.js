

// this is queerry file  

import { chownSync } from "node:fs";
import pool from "../../db/db.js";

// to  find the  user in db exisit  or  not 


//to check user exist  or not 
export const findUserByEmail = async (email) => {
    const [data] = await pool.query("select *from users where  email =?", [email])
    return data
}

// to insert the  user  

export const userRegisterQuery = async (name, email, password) => {
    const [data] = await pool.query("insert into users (name  , email , password) values(?,?,?)", [name, email, password])

    return data
}

// to  login the  user 

export const userLoginQuery = async (email) => {

    const [data] = await pool.query("select*from users where  email =?", [email])
    return data
}
// to update  user  for put  api 
export const updateUserQuery = async (name, email, password, id) => {

    const [data] = await pool.query("update  users set name = ? ,email = ? ,password = ? where id = ?", [name, email, password, id])
    return data

}

// to update  pass by patch 
export const findUserById = async (id) => {
    try {
        // Using [id] ensures the input is safely parameterized
        const [rows] = await pool.query('select * from users where id = ?', [id]);

        // Returns the user object if found, or null if not found
        return rows[0]
    } catch (error) {
        console.error("Database error in findUserById:", error);
    }
};

// to uodate  passonly 
export const updatePasswordQuery = async (id, password) => {
    try {

        const [data] = await pool.query("update  users  set password = ? where id=?", [password, id])
        return data

    } catch (error) {

    }
}

// to delete user  
export const deleteUserQuery = async (id) => {
    try {

        const [data] = await pool.query("delete from users where id = ?", [id])
        return data

    } catch (error) {
        console.log(error)
    }
}