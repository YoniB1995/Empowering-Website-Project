const productModel = require('../models/productModel');
const productInfo = require('../data/productInfo.json');

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json('add to db');
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};


const createProduct = async (req, res) => {
  try {
    const products = await productModel.insertMany(productInfo);
    res.status(200).json({ productsList: products });
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
