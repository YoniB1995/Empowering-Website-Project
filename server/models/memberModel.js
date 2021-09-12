const mongoose = require("mongoose"); // mongoose package
const Joi = require("joi"); // Joi package for validation

const Joigoose = require("joigoose")(mongoose); // convert joi schema to mongoose valid schema

const memberSchema = Joi.object({
	Email: Joi.string()
		.min(2)
		.max(20)
		.required()
		.email({ tlds: ["com"] }),
	// .meta({ _mongoose: { _id: true } }), // add specific  options to mongodb
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
// 18 + 19 convert joi schema to mongoose schema and add to the data base as collection
module.exports = {
	validMember,
	memberModel,
};
