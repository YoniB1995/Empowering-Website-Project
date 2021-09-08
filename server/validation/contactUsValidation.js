const joi = require('joi');

const contactUs = require('../models/contactUsModel');


exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    fullname: joi.string().min().max().required(),
    role: joi.string().min().max().required(),
    image: joi.string().min().max().required(),
    image: joi.string().min().max().required(),
    iscompleted:joi.boolean(),
    notes: joi.string().min().max()

  });
  return joiSchema.validate(bodyData,contactUs);
};
