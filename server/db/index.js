require("dotenv").config();
const mongoose = require("mongoose");

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("mongoose connect successed"))
	.catch((err) => console.log("err:", err));

const db = mongoose.connection;
module.exports = db;
