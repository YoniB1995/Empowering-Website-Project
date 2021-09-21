const mongoose = require('mongoose');

const Joi = require("joi");
const { boolean } = require('joi');

const joigoose = require("joigoose")(mongoose);


const contactUsSchema = Joi.object({
  email: Joi.string()
  .email()
  .min(5)
  .max(99)
  .regex('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
  .required()

},
{
  inquiry: Joi.string()
  .min(5)
  .max(99)
  .required()
},
{
  content: Joi.string()
  .min(5)
  .max(99)
  .required()
},
{
  iscompleted:Joi.boolean()
  .required()
},
{
  notes:Joi.string()
  .required()
})

const validContact = (contact)=>{
  const contactJoi = contactSchema.validate(contact)
  return contactJoi
}

const contactMongoose = new mongoose.Schema(joigoose.convert(contactMongoose))

const contactModel = mongoose.model('contact',contactMongoose)

module.exports={
  validContact,
  contactModel
}