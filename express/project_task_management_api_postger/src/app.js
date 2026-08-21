import express from "express";
import cookieParser from "cookie-parser";
//auth router 
import authRoutes from "./modules/auth/auth.routes.js";
// import cors from "cors";
import { authVerify } from "./middleware/auth.middleware.js";
// user router  
import userRoutes from "./modules/user/user.routes.js";
// task router  
import taskRoutes from "./modules/task/task.routes.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

// cureenly  hum iska  use nhi krege kyui ye  rule  brouser pr apply  hoga to humko  fronend choye  iske  kiye  jo hai nhi - 

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// this  is  test api / - is default  home of backend 
app.get("/", (req, res) => {
    res.json({
        message: "API working - Chlo miithaii khilaooo !! :)"

    });
});

// test the  middleware  authverify b
app.get("/test-auth", authVerify, (req, res) => {

    res.json({
        message: "You are logged in",
        user: req.user
    });

});
// AUTH ROUTER
app.use("/api/auth", authRoutes);


// USER  ROUTER  
app.use("/api/users", userRoutes)

// TASK ROUTER 
app.use("/api/task", taskRoutes)

export default app;
