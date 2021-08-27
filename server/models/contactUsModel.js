const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactUsSchema = new Schema({
  email: String,
  inquiry: String,
  content: String,
});

module.exports = mongoose.model('contactUs', contactUsSchema);
