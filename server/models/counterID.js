const mongoose = require('mongoose');

const Joi = require('joi');
const joigoose = require('joigoose')(mongoose);

const counterSchema = Joi.object({
  counterID: Joi.number().default(0).required(),
 
});
 
const counterIDMongoose = new mongoose.Schema(joigoose.convert(counterSchema));

const counterModel = mongoose.model('counters', counterIDMongoose);

module.exports = { 
  counterModel
}; 
