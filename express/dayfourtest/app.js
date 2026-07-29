
import express from "express"
import productRouter from "./src/modules/products/product.router.js"
import userRouter from "./src/modules/user/user.router.js"
import courseRouter from "./src/modules/course/course.router.js"
const app = express()
console.log("hello form app")

// api entry for  products  
app.use(express.json())
app.use("/test-product-api", productRouter)


// api entry for Users 
app.use("/test-user-api", userRouter)

// api entry for  courses
app.use("/test-course-api", courseRouter)




export default app





