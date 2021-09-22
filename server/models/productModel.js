const mongoose = require("mongoose");

const Joi = require("joi");

const joigoose = require("joigoose")(mongoose);

const productSchema = Joi.object(
	{
		Title: Joi.string().min(2).max(255).required(),
	},
	{
		Description: Joi.string().min(2).max(255).required(),
	},
	{
		Image: Joi.string().required(),
	},
	{
		Price: Joi.number().required(),
	},
	{
		Quantity: Joi.number().required(),
	}
);

const validProduct = (product) => {
	const productJoi = productSchema.validate(product);
	return productJoi;
};

<<<<<<< HEAD
const productmongooseSchema = new mongoose.Schema(joigoose.convert(productSchema))
=======
const productmongooseSchema = new mongoose.Schema(
	joigoose.convert(productSchema)
);
>>>>>>> fc6b52a9cf9d5d0f14fdc48b134d9301ad6b2657

const productModel = mongoose.model("product", productmongooseSchema);

module.exports = {
	validProduct,
	productModel,
};
