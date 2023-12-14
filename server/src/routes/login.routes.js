import { Router } from "express";
import { LoginController } from "../controllers/login.controllers.js";
const router = Router()

router.get("/", (req, res) => {
    res.send("Server: Login")
})

router.post("/", (req, res, next) => {
    console.log(`${JSON.stringify(req.body)}`)
    const { Authorization } = JSON.stringify(req.headers)
    console.log(JSON.stringify(Authorization))
    next()
},LoginController)

export default router