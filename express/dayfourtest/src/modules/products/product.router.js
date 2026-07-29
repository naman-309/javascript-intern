import { createProduct, getProduct } from "./product.crontroller.js";
import express from "express"

//  router  desiced  on which url which  function call 

const router = express.Router()

router.post("/product", createProduct)

//get req 
router.get("/product", getProduct)

export default router