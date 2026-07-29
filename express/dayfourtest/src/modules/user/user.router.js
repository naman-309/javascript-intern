// user  router 

import { createUser, getUser } from "./user.controller.js"
import express from "express"

const router = express.Router()

//post  request  to add data
router.post("/user", createUser)

// get  request  
router.get("/user", getUser)

export default router