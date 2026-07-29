import express from "express"
import { getCourse, createCourse } from "./course.controller.js"

const router = express.Router()

router.post("/course", createCourse)

router.get("/course", getCourse)

export default router