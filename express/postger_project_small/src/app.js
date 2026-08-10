import express from 'express';
import authROuter from './modules/auth/auth.router.js';
import cookieParser from "cookie-parser";

const app = express();


app.use(express.json())
app.use(cookieParser());


app.get('/', (req, res) => {
    res.json({ message: "back end is working fine" });
});

app.use("/api/user", authROuter)
export default app;
