const mongoose = require('mongoose');

const Joi = require('joi');
const joigoose = require('joigoose')(mongoose);

const cardSchemaReception = Joi.object({
  idCard: Joi.number(),
 
  fullName: Joi.string().min(4).max(199).required(),

  email: Joi.string().email().min(5).max(99).required(),
});
  
const validCard = (card) => {
  const cardJoi = cardSchemaReception.validate(card);
  return cardJoi;
};

const cardMongoose = new mongoose.Schema(joigoose.convert(cardSchemaReception));

const cardModel = mongoose.model('cards', cardMongoose);

module.exports = {
  validCard,
  cardModel,
};
