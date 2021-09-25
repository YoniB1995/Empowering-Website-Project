const joi = require('joi');

const teamSchema = require('../models/teamModel');


exports.validTeam = (bodyData) => {
  const joiSchema = joi.object({
    fullname: joi.string().min(4).max(15).required(),
    role: joi.string().min(3).max(7).required(),
    image: joi.string().min().max().required(),
    description: joi.string().min(10).max(300).required(),
    lang: joi.string().min(5).max(8).required(),


  });
  return joiSchema.validate(bodyData,teamSchema);
};
