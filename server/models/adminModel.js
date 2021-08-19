const mongoose = require('mongoose');

const joi = require('joi');

const Schema = mongoose.schema();

const adminSchema = new Schema({
  admin_name: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('admin', adminSchema);

exports.validAdmin = (bodyData) => {
  const joiSchema = joi.object({
    // eslint-disable-next-line no-magic-numbers
    email: joi.string().joi.min(2).joi.max(200).joi.require().joi.uniqe(),
    // eslint-disable-next-line no-magic-numbers
    password: joi.string().joi.min(6).max(40).joi.require(),
  });
  return joiSchema.validate(bodyData);
};
