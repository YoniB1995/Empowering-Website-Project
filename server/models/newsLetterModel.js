const mongoose = require("mongoose"); // mongoose package
const Joi = require("joi"); // Joi package for validation

const Joigoose = require("joigoose")(mongoose); // convert joi schema to mongoose valid schema

const campaginSchema = Joi.object({
	title: Joi.string().min(2).max(20).required(),
	descritipon: Joi.string().required().min(5).max(50),
	createAt: Joi.date().required(),
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
