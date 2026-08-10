

import express from "express";
import { registerUser, loginUser, userProfile, logOutUser } from "./auth.controller.js";
import { authVerify } from "../../middleware/auth.verify.middlware.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/profile", authVerify, userProfile)
router.post("/logout", authVerify, logOutUser)
export default router