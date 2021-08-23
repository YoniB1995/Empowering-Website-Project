const joi = require('joi');

exports.adminValidation = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.string().min(4).max(99).required(),
    password: joi.string().min(6).max(99).required(),
  });
  return joiSchema.validate(bodyData);
};
