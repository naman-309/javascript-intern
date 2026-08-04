// main logic file
import { count } from "node:console";
import { pool } from "../../db/db.js";

// for  get  api 
export const getStudent = async (req, res) => {

    try {
        const { name, course, fees } = req.body
        let que = `select*from students `

        const [result] = await pool.query(que, [name, course, fees])

        console.log(result)
        res.json({
            message: "data fatched  !!!",
            data: result
        })

    }
    catch (err) {
        console.log(err)
        res.json({
            message: "data  not found "
        })
    }

}


//  for  post  api 

export const createStudent = async (req, res) => {
    try {
        const { name, email, course, fees } = req.body
        const query = `insert  into students  
        (name  , email ,course , fees) 
         values(?,?,?)`
        const [data] = await pool.query(query, [name, email, course, fees])
        res.json({
            message: 'student data  added  sucessfully',
            data: data
        })
    }
    catch (err) {
        console.log(err)
    }
}

// for  put  api 
export const updateSudent = async (req, res) => {
    try {
        const { name, email, course, fees } = req.body
        const query = `select  * from students where email =? `
        const [exsiting] = await pool.query(query, [email])
        /// to check data  exsisit  or  not  
        if (exsiting.length === 0) {
            res.json({
                message: "student  not  found  for update"
            })
        }
        // for update  querry 
        const newQuery = `update  students  set name = ? ,email =?, course = ? , fees= ? where email = ?`


        const [result] = await pool.query(newQuery, [name, email, course, fees, email])
        // to check chnaghe  in row //  console.log(result)


        if (result.affectedRows === 1) {
            res.json({
                message: "student  data  updated sucessfully"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

}


// for  delete api 
export const deleteStudent = async (req, res) => {

    try {

        const { email } = req.body
        const [existing] = await pool.query(`select  * from students where email= ?`, [email])
        // check data hai ya nhi d
        if (existing.length === 0) {
            res.json({
                message: "Student  data  not found  for delete!!!!!!"

            })
        }
        // make  querry  fro  delete 

        const que = `delete from students where email = ? `
        const [result] = await pool.query(que, [email])
        // check delete  hua  ya  nhi 
        if (result.affectedRows === 1) {
            res.json({
                message: "student data  deleted sucessfully"
            })
        }
        else {
            res.json({
                message: " error  in deleting  data"
            })
        }

    } catch (err) {
        console.log(err)
    }
}

//
//  patch api 
export const patchStudent = async (req, res) => {
    try {
        const { student_id } = req.params;
        const { name, email, course, fees } = req.body;

        if (!student_id) {
            return res.json({ message: "Student ID is required" });
        }

        const query = "UPDATE students SET name = ?, email = ?, course = ?, fees = ? WHERE student_id = ?";

        const [data] = await pool.query(query, [name, email, course, fees, student_id]);

        if (data.affectedRows === 0) {
            return res.json({ message: "Student not found" });
        }

        return res.json({ message: "Student updated successfully" });

    } catch (err) {
        console.error(err);
        return res.json({ message: "Internal server error" });
    }
};
