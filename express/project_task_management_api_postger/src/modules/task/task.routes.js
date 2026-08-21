
import express from "express"
import { createTask, getAllTasks, getSingleTask } from "./task.controller.js"

import { authVerify } from "../../middleware/auth.middleware.js"
import { verifyRole } from "../../middleware/verify.role.js"
const router = express.Router()

// to add the  task 

router.post("/create", authVerify, verifyRole(["user"]), createTask)

// get  all tasks 


router.get("/all/task", authVerify, getAllTasks)

// get  single task by id 

router.get("/single/task/:id", authVerify, getSingleTask)


export default router

