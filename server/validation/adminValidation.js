const joi = require('joi');

exports.validAdmin = (adminData) => {
  const joiSchema = joi.object({
    password: joi.string().min(2).max(99).required(),
    email: joi.string().min(4).max(99).required()
      .email(),
  });
  return joiSchema.validate(adminData);
};
