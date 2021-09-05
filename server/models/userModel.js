const mongoose = require("mongoose"); // mongoose package
const Joi = require("joi"); // Joi package for validation

const Joigoose = require("joigoose")(mongoose); // convert joi schema to mongoose valid schema

const userSchema = Joi.object({
	Email: Joi.string()
		.min(2)
		.max(20)
		.required()
		.email({ tlds: ["com"] }),
	// .meta({ _mongoose: { _id: true } }), // add specific  options to mongodb
});

const validUser = (userData) => {
	const responseFromJoi = userSchema.validate(userData);
	console.log(responseFromJoi);
	return responseFromJoi;
};

const mongooseUserSchema = new mongoose.Schema(Joigoose.convert(userSchema));
const userModel = mongoose.model("user", mongooseUserSchema);
// 18 + 19 convert joi schema to mongoose schema and add to the data base as collection
module.exports = {
	validUser,
	userModel,
};
