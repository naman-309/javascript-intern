
import mysql2 from "mysql2/promise"

// 
const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_app"
})


const checkConeection = async (req, res) => {

    const response = await pool.getConnection()
    console.log("DB connected  sucesfully")


}
export { pool, checkConeection }