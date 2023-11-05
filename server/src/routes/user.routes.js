import express from "express"

const user = express.Router()

user.get("/", (req, res) => {
	res.json({ROUTER: "user.routes.js"})
})

export default user
