import express from "express";
import userRoutes from "./modules/user/user.routers.js";

const app = express();

// JSON request body read karega
app.use(express.json());

// HTML form data read karega
app.use(express.urlencoded({ extended: true }));

// Public folder serve karega
app.use(express.static("public"));

// User API routes
app.use("/api/users", userRoutes);

// Server test route
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Server is working"
    });
});

export default app;