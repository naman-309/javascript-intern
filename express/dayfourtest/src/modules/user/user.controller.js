//user  controller

import { user } from "../../db/db.js";

// logic main 
const createUser = (req, res) => {
    //post  method - to add data  
    const { name, address } = req.body
    const userData = { name, address }

    user.push(userData)

    console.log("User added sucessfully :", userData)
    console.log("Registred users :", user)

    res.json({
        message: "data  address  sucessfully",
        data: userData
    })
}

const getUser = (req, res) => {
    //get  method - to  fatch  data 
    res.json({
        message: "user fatched sucessfully",
        data: user
    })


}

export { createUser, getUser }