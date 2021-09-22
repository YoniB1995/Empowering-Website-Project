const mongoose = require('mongoose');

const Joi = require("joi");

const joigoose = require("joigoose")(mongoose);
const adminSchema = Joi.object({
  username: Joi.string()
  .min(4)
  .max(199)
  .required(),
  password: Joi.string()
  .min(6)
  .max(15)
  .required()
  // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
 ,
  email: Joi.string()
  .email()
  .min(5)
  .max(99)
  .required()
  
})


const validAdmin = (admin)=>{
  const adminJoi = adminSchema.validate(admin)
  return adminJoi
}

const adminMongoose = new mongoose.Schema(joigoose.convert(adminSchema))

const adminModel = mongoose.model('admin',adminMongoose)

module.exports={
  validAdmin,
  adminModel
}