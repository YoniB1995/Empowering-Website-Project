const mongoose = require('mongoose');

const Joi = require("joi");
const { required } = require('joi');
const Joigoose = require('joigoose');

const joigoose = require("joigoose")(mongoose);


const adminSchema = Joi.object({
  username: Joi.string()
  .min(4)
  .max(199)
  .required()
  
},
{
  password: Joi.string()
  // .regex('/^[a-2A-Z0-9],{3,30}/')
  .min(6)
  .max(15)
  .required()
  // password_confirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  
},
{
  email: Joi.string()
  .email()
  .min(5)
  .max(99)
  // .regex('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
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