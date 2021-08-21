const mongoose = require('mongoose');

const joi = require('joi');

const Schema = mongoose.schema();

const adminSchema = new Schema({
  password: String,
  email: String,
});

module.exports = mongoose.model('admin', adminSchema);
