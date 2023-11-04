import express from "express"
import connectDB from "./db/dbconfig.js"
import dotenv from "dotenv"
dotenv.config({path: "../env"})

connectDB()

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.json({Hello: "World"})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
