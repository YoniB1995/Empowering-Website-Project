const joi = require('joi');

<<<<<<< HEAD
const adminSchema = require('../models/adminModel');

=======
>>>>>>> asi/auth
exports.validAdmin = (adminData) => {
  const joiSchema = joi.object({
    password: joi.string().min(2).max(99).required(),
    email: joi.string().min(4).max(99).required()
      .email(),
  });
<<<<<<< HEAD
  return joiSchema.validate(adminData, adminSchema);
=======
  return joiSchema.validate(adminData);
>>>>>>> asi/auth
};
