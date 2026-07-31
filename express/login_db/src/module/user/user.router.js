
import express from "express"
import { getUser, createUser, updateUser, deleteUser } from "./user.controller.js"
// import { get } from "node:http"
const router = express.Router()

router.get("/user", getUser)
router.post("/user", createUser)
router.put("/user", updateUser)
router.delete("/user", deleteUser)


export default router