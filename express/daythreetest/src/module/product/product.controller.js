import { products } from "../../db/db.js"

const createProduct = (req, res) => {
    const { name, price, category } = req.body

    const productData = { name, price, category }


    // arry me  push kiya hai 
    products.push(productData)

    console.log("product add  kr diya :", productData)
    console.log("sare  products hai:", products)
    // res send  kiya postm ko 
    res.json({
        message: "data  added sucessfully"
    })
}

const getProducts = (req, res) => {
    res.json({
        message: "data  fatched sucessfully",
        data: products

    })
}

export { createProduct, getProducts }