const mongoose = require("mongoose"); // mongoose package
const Joi = require("joi"); // Joi package for validation

const Joigoose = require("joigoose")(mongoose); // convert joi schema to mongoose valid schema

const campaginSchema = Joi.object({
	Email: Joi.string().required(),
	date: Joi.date().required(),
});

const validCampagin = (campaginData) => {
	const responseFromJoi = campaginSchema.validate(campaginData);
	console.log(responseFromJoi);
	return responseFromJoi;
};

const mongooseCampaginSchema = new mongoose.Schema(
	Joigoose.convert(campaginSchema)
);
const campaginModel = mongoose.model("campagin", mongooseCampaginSchema);
// 18 + 19 convert joi schema to mongoose schema and add to the data base as collection
module.exports = {
	validCampagin,
	campaginModel,
};

// save the users from campgin for arcade
