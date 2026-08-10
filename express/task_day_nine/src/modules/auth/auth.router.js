
import express from "express"
import { deleteUser, registerUser, updatePassword, updateUser, userLogin, userlogOut, userProfile } from "./auth.controller.js"
import { authVerify } from "../../middleware/auth.middleware.js"
import { deleteUserQuery } from "./auth.query.js"
const router = express.Router()

//open routes
router.post("/register", registerUser)
router.post("/login", userLogin)

// protected routes
router.get("/profile", authVerify, userProfile)
//update 
router.put("/update", authVerify, updateUser)

//update  pass only 
router.patch("/update/password", authVerify, updatePassword)

//delete  user  by id 

router.delete("/delete", authVerify, deleteUser)

//logOut user  - erase the  cokies 
router.post("/logout", authVerify, userlogOut)


export default router




