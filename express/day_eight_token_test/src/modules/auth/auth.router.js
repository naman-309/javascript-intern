import express from "express"
import { userRegister, userLogin, getProfile, updateUserProfile, chnagePassword, delteUser } from "./auth.contoller.js"
import { verifyAuth } from "../middleware/auth.verify.middleware.js"
import { channel } from "node:diagnostics_channel"
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", verifyAuth, getProfile);

// update profile  
router.put("/update", verifyAuth, updateUserProfile)

// update  password only  
router.patch("/update/password", verifyAuth, chnagePassword)

//delete the user 
router.delete("/delete", verifyAuth, delteUser)

export default router