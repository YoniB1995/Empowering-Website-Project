const joi = require('joi');

const adminSchema = require('../models/adminModel');


exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    fullname: joi.string().min().max().required(),
    role: joi.string().min().max().required(),
    image: joi.string().min().max().required(),
    image: joi.string().min().max().required(),
    iscompleted:joi.boolean(),
    notes: joi.string().min().max()

  });
  return joiSchema.validate(bodyData);
};
