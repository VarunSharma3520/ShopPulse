import mongoose, {Schema} from "mongoose";

const loginSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required']
            // unique: true,
            // lowecase: true,
            // trim: true, 
            // index: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

export const Login = mongoose.model("Login", loginSchema)