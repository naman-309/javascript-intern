import express from "express"
import productRouter from "./module/product/product.router.js"

const app = express()
// make  json to obj to readable
app.use(express.json())

app.use("/api", productRouter)

export default app