const joi = require('joi');

<<<<<<< HEAD
exports.adminValidation = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.string().min(4).max(99).required(),
    password: joi.string().min(6).max(99).required(),
=======
exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    password: joi.string().min().max().require(),
    email: joi.string().min().max().require(),
>>>>>>> main
  });
  return joiSchema.validate(bodyData);
};
