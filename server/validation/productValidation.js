const joi = require('joi');

exports.validProduct = (bodyData) => {
  const joiSchema = joi.object({
    title: joi.string().min().max().required(),
    descripation: joi.string().min().max().required(),
    quantity: joi.number().required(),
    price: joi.number().required(),
    variants: joi.string().required(),
  });
  return joiSchema.validate(bodyData);
};
