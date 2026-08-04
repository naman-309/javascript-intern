

import { getStudent, createStudent, updateSudent, deleteStudent, patchStudent } from "./stu.controller.js";
import express from "express"
const router = express.Router()

// get api 
router.get("/student", getStudent)

// post  api 
router.post("/student", createStudent)

//put  api 
router.put("/student", updateSudent)

// delete  api 
router.delete("/student", deleteStudent)
export default router

//patch api  - by params  

router.patch("/student/:student_id", patchStudent)
