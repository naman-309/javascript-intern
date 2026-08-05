import express from "express"
import { userRegister, userLogin, getProfile } from "./auth.contoller.js"
import { verifyAuth } from "../middleware/auth.verify.middleware.js"
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", verifyAuth, getProfile);


export default router