const mongoose = require("mongoose"); 
const Joi = require("joi"); 

const Joigoose = require("joigoose")(mongoose); 

const campaginSchema = Joi.object({
	archive_url: Joi.string().required(),
	send_time: Joi.date().required(),
	id: Joi.string().required(),
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

