import pool from "./db.js";

export const setupDatabase = async () => {
    try {

        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                title VARCHAR(200) NOT NULL,
                description TEXT,
                status VARCHAR(20) DEFAULT 'pending',
                user_id INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                FOREIGN KEY (user_id)
                REFERENCES users(id)
                ON DELETE CASCADE
            )
        `);

        await pool.query(`
    DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1 FROM pg_type WHERE typname = 'user_role'
        ) THEN
            CREATE TYPE user_role AS ENUM (
                'admin',
                'manager',
                'user'
            );
        END IF;
    END
    $$;
`);
        await pool.query(`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS role user_role
    DEFAULT 'user'
    NOT NULL
`);
        // console.log("DATABASE TABLES READY");

    } catch (error) {
        console.log("DATABASE SETUP ERROR");
        console.log(error.message);
    }
};
