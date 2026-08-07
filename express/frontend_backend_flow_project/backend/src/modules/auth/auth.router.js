import express from "express";

import {
    userRegister,
    userLogin,
    getProfile,
    getAllUsers
} from "./auth.controller.js";


import { verifyAuth } from "../middleware/auth.verify.middleware.js";
const router = express.Router();

// Public routes
router.post("/register", userRegister);
router.post("/login", userLogin);

// Protected routes
router.get("/profile", verifyAuth, getProfile);
router.get("/users", getAllUsers);

export default router;