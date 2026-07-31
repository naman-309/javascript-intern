
import mysql2 from "mysql2/promise"

const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_app"

})


const checkConnection = async () => {

    try {
        const response = await pool.getConnection()
        console.log("Database  connected sucessfully")
    }
    catch (error) {
        console.log(error)
    }

}
export { pool, checkConnection }