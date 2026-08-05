
import express from "express"
import { userRegister, userLogin, getAllUsers, userProfile } from "./auth.controller.js"
import { authVerify } from "../../middleware/auth.verify.middleware.js"
const router = express.Router()

// to get  all users 
router.get("/alluser", getAllUsers)
// to add user  
router.post("/register", userRegister)
// to login
router.post("/login", userLogin)
router.get("/profile", authVerify, userProfile)




export default router