import { Router } from "express";
import { LoginController } from "../controllers/login.controllers.js";
const router = Router()

router.get("/", (req, res) => {
    res.send("Server: Login")
})

router.post("/", (req, res, next) => {
    next()
},LoginController)

export default router