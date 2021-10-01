require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
	await mongoose.connect("mongodb+srv://empowering2021:EMpower1234@cluster0.mwn5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});
};
connectDB()
	.then(() => {
		console.log("MongoDB Atlas Connected");
		// importData();
	})
	.catch((err) => {
		console.log(`Error Message - ${err.message}`);
	});

module.exports = mongoose.connection;
