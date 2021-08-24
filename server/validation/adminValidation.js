const joi = require('joi');

const adminSchema = require('../models/adminModel');

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    password: joi.string().min().max().required(),
    email: joi.string().min().max().required(),
  });
  return joiSchema.validate(bodyData, adminSchema);
};
