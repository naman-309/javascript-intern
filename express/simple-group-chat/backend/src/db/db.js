
import pg from "pg"
import dotenv from "dotenv"

// config   
dotenv.config() // to access  the  valibles form .env file   call is imp 

// set up the  pool 

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
        //   this  is  imp  for  neon db  connection  to  avoid  ssl error
    }
});


//  check the  connection

export const checkConnection = async () => {

    const response = await pool.query("select 1")
    // console.log("DATABASE RESPONSE :", response)
    // it  give a  object for  db  contaion numtile  key and  imp  rows  
    console.log("DB CONNECTED")
}

export default pool