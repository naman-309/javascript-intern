import express from "express";

import { login, register, logout } from "./auth.controller.js";
import { authVerify } from "../../middleware/auth.middleware.js";

const router = express.Router();
// register 
router.post("/register", register);

// login 
router.post("/login", login)

// logout  
router.post("/logout", authVerify, logout)


export default router;