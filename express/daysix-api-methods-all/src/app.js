import express from "express"
import Studentrouter from "./modules/student/stu.router.js"
const app = express()



app.use(express.json())
//stuent  module work
app.use("/api", Studentrouter)



export { app }