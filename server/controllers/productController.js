const productModel = require('../models/productModel');
const productInfo = require('../data/productInfo.json');

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const products = await productModel.insertMany(req.body);
    res.status(200).json({ productsList: products });
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.deleteOne(req.params.id);
    res.status(200).json({ productsList: deletedProduct });
  } catch (e) {
    console.log('cannot delete product from the data base');
    res.status(400).json({ error: 'server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(product);
  } catch (e) {
    console.log('cannot found product ');
    res.status(400).json({ error: 'server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
