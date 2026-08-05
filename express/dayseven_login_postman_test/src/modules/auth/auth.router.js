
import express from "express"
import { userRegister, userLogin, updateUser, deleteUser, updateUserByPatch, getAllUsers } from "./auth.controller.js"
const router = express.Router()

// to get  all users 
router.get("/alluser", getAllUsers)
router.post("/register", userRegister)
router.post("/login", userLogin)



router.put("/update", updateUser)
router.delete("/delete", deleteUser)
router.patch("/updatepatch/:id", updateUserByPatch)


export default router