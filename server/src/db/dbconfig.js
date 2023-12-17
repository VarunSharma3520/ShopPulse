import mongoose from "mongoose"

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGO_DB_URI}`
		)
		await console.log(
			`connection sucessfull\n DB HOST: ${connectionInstance.connection.host}`
		)
	} catch (err) {
		console.error(`ERROR: ${err}`)
		process.exit(1)
	}
}

export default connectDB

/*
// writing iife
;(async () => {
	try {
		await mongoose.connect(
			`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`
		)
		await console.log("connection sucessfull")
	} catch (err) {
		console.error(`ERROR${err}`)
	}
})()
*/
