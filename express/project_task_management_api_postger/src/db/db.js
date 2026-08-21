
import pg from "pg"
import dotenv from "dotenv"

// config   
dotenv.config() // to access  the  valibles form .env file   call is imp 

// set up the  pool 

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false   // means or  connection is  safe  no one  in the  millde  can access  or data   for  this  pc only  
    }
});

// to check the  connection 



export const checkConnection = async () => {

    const response = await pool.query("select 1")
    // console.log("DATABASE RESPONSE :", response)
    // it  give a  object for  db  contaion numtile  key and  imp  rows  
    console.log("DB CONNECTED")
}

export default pool