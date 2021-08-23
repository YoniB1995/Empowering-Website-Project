const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  descripation: String,
  quantity: Number,
  price: Number,
  variants: String,
});

module.exports = mongoose.model('product', productSchema);
