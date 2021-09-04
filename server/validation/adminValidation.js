const joi = require('joi');

const adminSchema = require('../models/adminModel');

exports.validAdmin = (adminData) => {
  const joiSchema = joi.object({
    password: joi.string().min(2).max(99).required(),
    email: joi.string().min(4).max(99).required()
      .email(),
  });
  return joiSchema.validate(adminData, adminSchema);
};
