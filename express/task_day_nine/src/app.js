import express from "express"
import cookieParser from 'cookie-parser';

import authRouter from "./modules/auth/auth.router.js"

const app = express()

app.use(express.json())
app.use(cookieParser()); // Must be placed BEFORE your router middleware
app.use("/api", authRouter)


export default app 