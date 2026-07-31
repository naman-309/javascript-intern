
// emp make a routes 

import express from "express";
import { getEmployees, createEmployees } from "./emp.controller.js";
import { runInContext } from "node:vm";

const router = express.Router()

router.get("/emp", getEmployees)

router.post("/emp", createEmployees)

export default router 