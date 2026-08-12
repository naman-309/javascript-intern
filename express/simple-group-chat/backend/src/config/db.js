import pg from "pg";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing from .env");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined
});

export const testDatabaseConnection = async () => {
  const client = await pool.connect();

  try {
    const result = await client.query("SELECT NOW() AS current_time");
    console.log("PostgreSQL connected:", result.rows[0].current_time);
  } finally {
    client.release();
  }
};

export default pool;

