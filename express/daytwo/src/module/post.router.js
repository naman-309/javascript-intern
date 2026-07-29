import express from "express"
import { createUser } from "./post.controller.js"
const router = express.Router()

// CALLBACK PASED IN  POST  OF  CREATE USER  
// THIS  IS FOPR POST  REQUEST  
router.post("/postdata", createUser)

export default router