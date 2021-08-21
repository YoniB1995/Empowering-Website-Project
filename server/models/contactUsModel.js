const mongoose = require('mongoose');

const joi = require('joi');

const Schema = mongoose.Schema();

const contactUsSchema = new Schema({
  email: String,
  inquiry: String,
  content: String,
});

module.exports = mongoose.model('contactUs', contactUsSchema);

exports.validContactUs = (bodyData) => {
  const joiSchema = joi.object({
    email: joi.String().joi.min().joi.max().joi.require(),
    inquiry: joi.String().joi.min().joi.max().joi.require(),
    content: joi.String().joi.min().joi.max().joi.require(),
  });
  return joiSchema.validate(bodyData);
};
