const productRouter = require('express').Router();
const productController = require('../controllers/productController');
const isRequestValid = require('../middleware/isRequestValid');

productRouter.get('/', async (req, res, next) => {
  console.log('hey Im Middleware between get ');
  next();
}, productController.getAllProducts);
productRouter.post('/createProduct', (req, res, next) => {
  isRequestValid(req, res, next);
}, productController.createProduct);

productRouter.delete('/deleteProduct', productController.deleteProduct);
productRouter.put('/updateProduct', productController.updateProduct);

module.exports = productRouter;
