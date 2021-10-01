

const mongoose  = require('mongoose');

const Joi = require('joi')

const Joigoose = require('joigoose')(mongoose)

const partnerSchema = Joi.object({
  name:Joi.string().min(4).max(30).required(),
  image: Joi.string().min(50).max(400).required(),
})

const validPartner = (team) =>{
  const partnerJoi =  partnerModel.validate(team)
  return partnerJoi;
}

const partnerMongooseSchema = mongoose.Schema(Joigoose.convert(partnerSchema))

const partnerModel = mongoose.model('partner',partnerMongooseSchema)

module.exports = {
  validPartner,
  partnerModel
}