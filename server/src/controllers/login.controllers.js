import bcrypt from "bcrypt"
import validator from 'validator';
import { Login } from "../models/login.models.js";
import mongoose from "mongoose";


const LoginController = async (req, res) => {
    const { username, password } = req.body
    if (!validator.isStrongPassword(password)) {
        res.json({ "password":password,"message": " too weak password" })
    }
    bcrypt.hash(password, 4, async (err, password) => {
        const user = await Login.create({ username, password });
    });
    const body = req.body
    res.json([body,username,password])
}

export { LoginController }