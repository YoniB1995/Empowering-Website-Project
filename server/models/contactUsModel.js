const mongoose = require('mongoose');

const Joi =require('joi')

const Joigoose = require('Joigoose')(mongoose)

const contactUsSchema = Joi.object({
  Email: Joi.string()
  .email()
  .required()
},
{Inquiry: Joi.string()
.min(2)
.max(255)
.required()

},
{
  Content :Joi.string()
  .min(2)
.max(255)
.required()

}
)

const validContact = (contact)=>{
  const joiObject = contactUsSchema.validate(contact)
  return joiObject
}

const mongooseContact = new mongoose.Schema(Joigoose.convert(contactUsSchema))
const contactModel = mongoose.model('contactUs',mongooseContact)
module.exports = {
  validContact,
  contactModel
}

