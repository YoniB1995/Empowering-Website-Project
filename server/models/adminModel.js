const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('admin', adminSchema);
