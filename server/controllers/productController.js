const productModel = require('../models/productModel');
const ErrorResponse = require('../utils/errorResponse');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (e) {
    console.log('cannot find list of products');
    next(new ErrorResponse('server error', 400));
    // res.status(400).json({ error: 'server error' });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const products = await productModel.insertMany(req.body);
    res.status(200).json('delete product success');
  } catch (e) {
    console.log('cannot add product to the store products');
    return next(new ErrorResponse('Cannot add product to the store products', 500));
    // res.status(400).json({ error: 'server error' });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete();
    res.status(200).json({ productsList: deletedProduct });
    console.log('delete product');
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
