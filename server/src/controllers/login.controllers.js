import bcrypt from "bcrypt"
import validator from "validator"
import {Login} from "../models/login.models.js"

const LoginController = async (req, res) => {
	const {username, password} = req.body
	if (
		(!validator.isStrongPassword(password),
		{
			minLength: 8,
			minSymbols: 0,
			minUppercase: 1,
			minNumbers: 2,
		})
	) {
		return res.json({password: password, message: "Too weak password"})
	}
	try {
		const hashedPassword = await bcrypt.hash(password, 4)
		// Create a user using the hashed password
		console.log("first")
		const user = await Login.create({username, password: hashedPassword})
		console.log("2")
		// Send the response after user creation
		res.json({user, message: "User created successfully"})
	} catch (error) {
		console.error(error)
		res.status(500).json({error: error})
	}
}

export {LoginController}
