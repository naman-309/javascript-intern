import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})


export const checkConnection = async () => {
    try {


        await pool.connect()
        console.log("db connected ")
    } catch (error) {

    }

}
export default pool;

