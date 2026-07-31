import express from "express"
import empRouter from "./modules/employees/emp.router.js"
const app = express()

app.use(express.json())
app.use("/api", empRouter)





export default app 