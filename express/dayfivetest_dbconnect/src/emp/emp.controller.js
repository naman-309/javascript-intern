// make main  logic functions 

import { error } from "node:console";
import { pool } from "../db/db.js";

// make  a fucntion for get  the  data form database  

//for get   req 
const getEmployees = async (req, res) => {
    try {
        const [empData] = await pool.query('SELECT * FROM employees');
        console.log('Data fetched:', empData);
        res.json({
            message: 'Data fetched successfully',
            data: empData
        });
    } catch (err) {
        console.error('Failed to fetch data:', err);
        res.json({
            message: 'Data not fetched',
            error: err.message
        });
    }
};


// for post  req 


const createEmployees = async (req, res) => {


    try {

        const { name, email, password, department, salary } = req.body
        const query = `insert into employees 
             (name , email , password , department , salary) 
             value(?,?,?,?,?) `
        const [result] = await pool.query(query, [name, email, password, department, salary])

        res.json({
            message: "data  addredd sucesfully",
            data: result
        })

    }

    catch (err) {
        console.log(err.message)
        res.json({
            message: "failed  to add the data "
        })

    }

}



export { getEmployees, createEmployees }