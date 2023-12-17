import mongoose, {Schema} from "mongoose";

const loginSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, "Username is required"],
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			unique: [true, "Password already taken"],
			required: [true, "Password is required"],
			trim: true
		},
	},
	{
		timestamps: true,
	}
)

export const Login = mongoose.model("Login", loginSchema)