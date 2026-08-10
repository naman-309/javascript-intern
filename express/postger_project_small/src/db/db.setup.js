// to make  table  in db 

import pool from "./db.js"

export const setUpDatabase = async () => {

    try {

        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS users (
            
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            
              `
        )

    } catch (error) {
        console.log(error.message, "data base  setup error")
    }
}