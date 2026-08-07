import express from "express"
import { userRegistration, userLogin, userProfile, updateUserProfile } from "./auth.controller.js"
import { authVerify } from "../middleware/auth.verify.middleware.js"
const router = express.Router()

// to register 
router.post("/user/register", userRegistration)
//to login 
router.post("/user/login", userLogin)
// to get  profile
router.get("/user/profile", authVerify, userProfile)
// to update  user  info 
router.put("/user/update", authVerify, updateUserProfile)

export default router

