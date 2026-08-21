import express from "express";
import { authenticateToken } from "../../middleware/auth.verify.middleware.js";
import { verifyRole } from "../../middleware/verify.role.middleware.js";
import { deleteUser, getAllUsers } from "./user.controller.js";

const router = express.Router();

// get  all  user  for admin    
router.get("/all", authenticateToken, verifyRole(["admin", "manager"]), getAllUsers);

// delete  user by id for admin 

router.delete("/delete/:id", authenticateToken, verifyRole(["admin"]), deleteUser);



export default router;

