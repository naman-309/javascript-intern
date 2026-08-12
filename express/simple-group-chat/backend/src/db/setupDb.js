import "dotenv/config";
import pool from "../config/db.js";

const setupDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'user'
          CHECK (role IN ('user', 'admin')),
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        message TEXT NOT NULL CHECK (char_length(message) <= 1000),
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_messages_created_at
      ON messages(created_at);
    `);

    console.log("Database tables are ready");
  } catch (error) {
    console.error("Database setup failed:", error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

setupDatabase();

