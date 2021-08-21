const joi = require('joi');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    password: joi.string().min().max().require(),
    email: joi.string().min().max().require(),
  });
  return joiSchema.validate(bodyData);
};
