// Authentication routes will be added here.

import express from "express";
import { registerUser, loginUser, getProfile, logoutUser } from "./auth.controller.js";
import { registerLimiter } from "../../middleware/rateLimiter.middleware.js";
import { authenticateToken } from "../../middleware/auth.verify.middleware.js";
const router = express.Router();

// Register route with rate limiter
router.post("/register", registerLimiter, registerUser);

// login router 
router.post("/login", loginUser);

// get  profile  
router.get("/profile", authenticateToken, getProfile)

// logout  user  
router.post("/logout", authenticateToken, logoutUser)


export default router;
