import { expectFailure } from "node:test";
import { getEmployees, createEmployee } from "./emp.controller.js";
import express from "express"
const router = express.Router()

// get router  
router.get("/emp", getEmployees)
//post 
router.post("/emp", createEmployee)

export default router