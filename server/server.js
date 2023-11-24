import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./src/db/dbconfig.js"
import dotenv from "dotenv"
import user from "./src/routes/user.routes.js"

const app = express()
const port = process.env.PORT || 3000
app.use(express.static("public"))
app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())
app.use("/", user)


dotenv.config({path: "../env"})
connectDB().then(
	app.listen(port, () => {
	console.log(`Example app listening on port https://localhost:${port}`)
}))
