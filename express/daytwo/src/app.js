
import express from "express"
import postRouter from "./module/post.router.js"

const app = express()

///  ythis is  middleware file      
app.use(express.json())


/// to  coneect the routert 
app.use("/api", postRouter)

export default app


