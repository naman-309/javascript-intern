import express from "express";

import { deleteUser, getProfile, updateProfile, userDeleteByAdmin } from "./user.controller.js";
import { authVerify } from "../../middleware/auth.middleware.js";
import { verifyRole } from "../../middleware/verify.role.js";

const router = express.Router();

// get profile  

router.get("/profile", authVerify, getProfile);
// update user  
router.put("/update", authVerify, updateProfile)

// delete  user 

router.delete("/delete", authVerify, deleteUser)

router.delete("/delete/:id", authVerify, verifyRole(["admin"]), userDeleteByAdmin)

export default router;