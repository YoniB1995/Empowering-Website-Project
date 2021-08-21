const joi = require('joi');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.String().joi.min().joi.max().joi.require(),
    inquiry: joi.String().joi.min().joi.max().joi.require(),
    content: joi.String().joi.min().joi.max().joi.require(),
  });
  return joiSchema.validate(bodyData);
};
