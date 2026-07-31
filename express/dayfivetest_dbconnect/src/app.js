
import express from "express"
import empRouter from "./emp/emp.router.js"

export const app = express()


app.use(express.json())

app.use("/api", empRouter)
console.log("ths is app file")