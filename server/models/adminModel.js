const mongoose = require('mongoose');
const Joi = require('joi');
const { object } = require('joi');

const Joigoose = require('joigoose')(mongoose); // convert joi schema to mongoose valid schema


const adminSchema =Joi.object({
username : Joi.string()
  .min(2)
  .max(255)
  .required()

},{
  password :Joi.string()
  .min(6)
  .max(255)
.regex(/^[a-zA-Z0-9]{8,30}$/)
  .required()
},{
  email: Joi.string()
  .email({ minDomainSegments: 3, tlds: { allow: ['com', 'net','co.il'] } })
  .min(6)
  .max(199)
  .required()
})

const validAdmin =(admin)=>{
  const joiObject = adminSchema.validate(admin)
  return joiObject
}
const mongooseAdmin = new mongoose.Schema(Joigoose.convert(adminSchema))
const adminModel= mongoose.model('admin', mongooseAdmin);

module.exports={
  validAdmin,
  adminModel
}