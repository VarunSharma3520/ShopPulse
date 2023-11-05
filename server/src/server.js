import express from "express"
import connectDB from "./db/dbconfig.js"
import dotenv from "dotenv"
import user from "./routes/user.routes.js"

dotenv.config({path: "../env"})
// connectDB()

const app = express()
const port = process.env.PORT || 3000

app.use("/", user)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
