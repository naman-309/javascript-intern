// main logic  file 
import { pool } from "../../db/db.js";

//get  emp data form  db
const getEmployees = async (req, res) => {
    try {
        const [employees] = await pool.query(
            "select *from employees"
        );
        console.log("emp data fatched:", getEmployees)

        // make  data  in obj 
        res.json({
            message: "Employees data  fatched  sucessfully",
            data: employees
        })
    }
    catch (err) {
        res.status(500).json({
            message: "falied to fetched data",
            error: err.message
        })
    }

}

// post the new  data 
const createEmployee = async (req, res) => {
    try {
        const { name, email, password, department, salary } = req.body

        // main part 
        const querry = `  insert into employees
                  (name , email,password,department , salary)
                   values(?,?,?,?,?) `

        const [result] = await pool.query(querry, [
            name, email, password, department, salary
        ])



        res.status(201).json({
            message: "employee data  added",
            employeeId: result.insertId

        })

    }
    catch (err) {
        res.status(500).json({
            message: "error while  adding",
            error: err.message
        })

    }
}
export { createEmployee, getEmployees }