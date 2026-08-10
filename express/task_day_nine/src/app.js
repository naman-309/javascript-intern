import express from "express"
import authRouter from "./modules/auth/auth.router.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.json({ message: "backedn is working fine " })
})

app.use("/api/user", authRouter)


export default app 