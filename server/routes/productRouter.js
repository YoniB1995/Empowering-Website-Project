const productRouter = require('express').Router();
const productController = require('../controllers/productController');
const isRequestValid = require('../middleware/isRequestValid');

productRouter.get('/', productController.getAllProducts);
// middleware to check if request body is empty
productRouter.post('/createProduct', isRequestValid);
productRouter.post('/createProduct', productController.createProduct);

productRouter.delete('/deleteProduct', productController.deleteProduct);
productRouter.put('/updateProduct/:id', productController.updateProduct);

module.exports = productRouter;
