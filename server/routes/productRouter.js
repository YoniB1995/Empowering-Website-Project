const productRouter = require('express').Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.getAllProducts);
productRouter.post('/createProduct', productController.createProduct);
productRouter.delete('/deleteProduct', productController.deleteProduct);
productRouter.put('/updateName', productController.updateProductName);

module.exports = productRouter;
