// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



// file import
import connectDB from "./db/dbconfig.js";

//routes import
import userRouter from './routes/user.routes.js';
import loginRouter from './routes/login.routes.js';

// app intialization 
const app = express()

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/login", loginRouter)

app.use(cors());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.disable('x-powered-by');

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})