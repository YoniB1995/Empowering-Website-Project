const joi = require('joi');

const adminSchema = require('../models/adminModel');

exports.validAdmin = (adminData) => {
  const joiSchema = joi.object({
    password: joi.string().min().max().required(),
    email: joi.string().min().max().required(),
  });
  return joiSchema.validate(adminData, adminSchema);
};
