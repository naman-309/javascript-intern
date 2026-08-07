
import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.router.js";

const app = express()

//middleware  
// coros - allow to react/FE api 
app.use(cors())

// json  body read krne  ke  liye  
app.use(express.json())

// simple  test route 
app.get("/", (req, res) => {
    res.json({ message: "Backend is  wokring " })
})

// main auth routes 
app.use("/api/auth", authRouter)
export default app