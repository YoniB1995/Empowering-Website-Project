const productModel = require('../models/productModel');

const validProduct = require('../validation/productValidation');

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ productsList: products });
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};

// eslint-disable-next-line consistent-return
const createProduct = async (req, res) => {
  try {
    let valid = validProduct(req.body);
    if (valid.error) {
      return res.status(400).json(valid.error.details[0].message);
    }
    let product = new productModel(req.body);
    await product.save();
    console.log('c');
    res.json(product);
  } catch (e) {
    console.log('cannot find list of products');
    res.status(400).json({ error: 'server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
