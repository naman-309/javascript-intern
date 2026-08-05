
import mysql2 from "mysql2/promise"

const pool = mysql2.createPool({

    host: "localhost", user: "root", password: "", database: "login_system"

})

export const checkConnection = async () => {

    let response = await pool.getConnection()
    console.log("data  base  connected sucesfully")
}


export default pool