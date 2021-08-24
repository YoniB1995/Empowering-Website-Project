const joi = require('joi');

const productSchema = require('../models/productModel');

exports.validProduct = (bodyData) => {
  const joiSchema = joi.object({
    title: joi.string().min(2).max(255).required(),
    descripation: joi.string().min(2).max(255).required(),
    img: joi.string().required(),
    quantity: joi.number().required(),
    price: joi.number().required(),
    variants: joi.string().required(),
  });
  return joiSchema.validate(bodyData);
};
