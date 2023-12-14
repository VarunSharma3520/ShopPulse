// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/dbconfig.js"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
)

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
	res.send("hello world")
})
// http://localhost:8000/api/v1/users/registerdotenv.config({
// path: "./.env"
// })

connectDB()
	.then(() => {
		app.listen(process.env.PORT || 8000, () => {
			console.log(`⚙️ Server is running at port : ${process.env.PORT}`)
		})
	})
	.catch((err) => {
		console.log("MONGO db connection failed !!! ", err)
	})
