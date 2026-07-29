
// konse  url pr  konsa  contoller chelga yeh dekga to  ...
import express from "express"
import { createProduct, getProducts } from "./product.controller.js"

const router = express.Router()
// pst  method  
// jp  bhi mehods  se  aya  prouds  pr ayega then call back excute  hoga
router.post("/products", createProduct)
// getmethod
router.get("/products", getProducts)

export default router