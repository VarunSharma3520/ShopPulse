import {Router} from "express"
import {registerUser} from "../controllers/user.controllers.js"
import {upload} from "../middlewares/user.middlewares.js"

const router = Router()
router.get("/", (req, res) => {
	res.send("Birds home page")
})
router.route("/register").post(
	upload.fields([
		{
			name: "avatar",
			maxCount: 1,
		},
		{
			name: "coverImage",
			maxCount: 1,
		},
	]),
	registerUser
)

export default router
