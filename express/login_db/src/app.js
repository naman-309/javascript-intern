
import express from "express"
import userRouter from "./module/user/user.router.js"
const app = express()

app.use(express.json())

app.use("/api", userRouter)
export { app }