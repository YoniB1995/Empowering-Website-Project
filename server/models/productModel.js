const mongoose = require("mongoose");

const Joi = require('joi');

const Joigoose = require('Joigoose')(mongoose)

const productSchema =Joi.object({
	Title: Joi.string()
	.min(2)
	.max(99)
	.required()
},
{Descrption: Joi.string()
    .min(2)
	.max(99)
	.required()
},
{
	Image: Joi.string()
	.min(2)
	.max(1999)
	.required()
},
{
	Quantity: Joi.number()
	.required()
	
},
{
	Price: Joi.number()
	.min(2)
	.max(1999)
	.required()
}
)

const validProduct = (product) =>{
	const joiObject = productSchema.validate(product);
	return joiObject;
}

const mongooseProduct=  new mongoose.Schema(Joigoose.convert(productSchema))
const productModel = mongoose.model('product',mongooseProduct);
module.exports = {
	validProduct,
	productModel
}
