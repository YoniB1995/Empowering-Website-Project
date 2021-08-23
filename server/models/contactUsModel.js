const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const contactUsSchema = new Schema({
  email: String,
  inquiry: String,
  content: String,
});

module.exports = mongoose.model('contactUs', contactUsSchema);
