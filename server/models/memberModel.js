const mongoose = require("mongoose"); 
const Joi = require("joi"); 

const Joigoose = require("joigoose")(mongoose); 

const memberSchema = Joi.object({
	Email: Joi.string()
		.min(2)
		.max(35)
		.required()
		.email(),

});

const validMember = (memberData) => {
	const responseFromJoi = memberSchema.validate(memberData);
	console.log(responseFromJoi);
	return responseFromJoi;
};

const mongooseMemberSchema = new mongoose.Schema(
	Joigoose.convert(memberSchema)
);

const memberModel = mongoose.model("member", mongooseMemberSchema);
module.exports = {
	validMember,
	memberModel,
};


