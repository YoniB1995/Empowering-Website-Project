const joi = require('joi');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.string().min().max().required(),
    inquiry: joi.string().min().max().required(),
    content: joi.string().min().max().required(),
  });
  return joiSchema.validate(bodyData);
};
