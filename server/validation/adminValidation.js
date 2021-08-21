const joi = require('joi');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    password: joi.String().joi.min().joi.max().joi.require(),
    email: joi.String().joi.min().joi.max().joi.require(),
  });
  return joiSchema.validate(bodyData);
};
