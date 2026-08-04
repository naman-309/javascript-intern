import mysql from "mysql2/promise";

// MySQL pool create kiya
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo_node_app",
    waitForConnections: true,
    connectionLimit: 10
});

// Connection test
export const checkConnection = async () => {
    try {
        const connection = await db.getConnection();

        console.log("DATABASE CONNECTED!!!!");

        connection.release();
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR:", error.message);
    }
};

// Actual pool directly export karo
export default db;