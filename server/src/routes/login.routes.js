import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.send("Server: Login")
})

export default router