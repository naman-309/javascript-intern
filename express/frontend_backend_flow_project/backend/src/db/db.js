import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_system"
});


export const checkConnection = async (req, res) => {
    const response = await pool.getConnection()
    console.log("db connected ")


}
export default pool;


