const joi = require('joi');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.string().min().max().require(),
    inquiry: joi.string().min().max().require(),
    content: joi.string().min().max().require(),
  });
  return joiSchema.validate(bodyData);
};
