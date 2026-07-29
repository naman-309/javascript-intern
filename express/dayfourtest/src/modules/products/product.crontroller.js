import { product } from "../../db/db.js";

///this function is for  post  resquest to send data to server or  database
const createProduct = (req, res) => {

    console.log("hello for controller posrt req")
    const { id, name, price, size } = req.body

    // new obj to recive obj data 
    const productData = { id, name, price, size }


    // add  to  the  data  base  
    product.push(productData)


    // to disply all  produts 
    console.log("product  addres sucessfully", productData)
    // console.log("all products are :" produts)

    res.json({
        message: "data  added sucesfully",
        data: productData
    })

}

const getProduct = (req, res) => {

    res.json({
        message: "data  fatched  sucesfully",
        data: product
    })

}

export { createProduct, getProduct }