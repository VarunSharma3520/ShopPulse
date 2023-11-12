import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
			minlength: 2,
			unique: true,
			lowercase: true,
		},
		lastname: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			validate: {
				validator: (value) => {
					return [
						/[$@$!%*?&]/.test(password),
						/[A-Z]/.test(password),
						/[a-z]/.test(password),
						/[0-9]/.test(password),
					].every((check) => check)
				},
				message:
					"Password must contain letters, spaces & special characters",
			},
			minlength: 8,
			trim: true,
			unique: true,
		},
	},
	{timestamps: true}
)
const Video = mongoose.model("User", videoSchema)

export default Video