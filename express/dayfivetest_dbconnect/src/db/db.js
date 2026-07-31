// crate  pool 
//create  connection 
// get  connection  to check db connected  or ot  

import mysql2 from "mysql2/promise"

const pool = mysql2.createPool({

    host: "localhost",
    user: "root",
    password: "",
    database: "node_app"


})

const checkConnection = async (req, res) => {

    try {
        const response = await pool.getConnection()
        console.log("connected  to database  sucessfully")
    }
    catch (err) {
        console.log("failed to connect to database", err)

    }

}

export { checkConnection, pool }