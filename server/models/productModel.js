const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const productSchema = new Schema({
  title: String,
  descripation: String,
  quantity: Number,
  price: Number,
  variants: String,
});

module.exports = mongoose.Model('product', productSchema);
