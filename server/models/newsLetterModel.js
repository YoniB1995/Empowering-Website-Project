const mongoose = require("mongoose"); 
const Joi = require("joi"); 

const Joigoose = require("joigoose")(mongoose); 

const campaginSchema = Joi.object({
	title: Joi.string()
	.min(2)
	.max(20)
	.required(),
	descritipon: Joi.string()
    .min(5)
    .max(50)
    .required(),
	createAt: Joi.date()
	.required(),
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
module.exports = {
	validCampagin,
	campaginModel,
};


