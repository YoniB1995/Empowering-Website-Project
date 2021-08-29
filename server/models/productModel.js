const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  descripation: String,
  img: String,
  quantity: Number,
  price: Number,
  variants: String,
});
const productModel = mongoose.model('product', productSchema);
module.exports = productModel;
