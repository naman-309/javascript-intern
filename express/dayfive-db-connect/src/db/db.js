
import mysql2 from "mysql2/promise"

// make a  pool 
const pool = mysql2.createPool({

    host: "localhost",
    user: "root",
    password: "",
    database: "node_app"
})

// to check db connected  or not 

const checkConnection = async () => {

    try {
        const connection = await pool.getConnection()
        console.log("DATABASE CONNECTED!!!!")
    }
    catch (err) {
        console.log(err)
    }
}

export { checkConnection, pool }