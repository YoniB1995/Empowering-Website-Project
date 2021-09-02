const productRouter = require("express").Router();
const productController = require("../controllers/productController");
const isRequestValid = require("../middleware/isRequestValid");

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProduct);

// middleware to check if request body is empty
productRouter.post("/createProduct", isRequestValid);
productRouter.post("/createProduct", productController.createProduct);

productRouter.delete("/deleteProduct/:id", productController.deleteProduct);
productRouter.put("/updateProduct/:id", productController.updateProduct);
// from updateProduct ejs render

productRouter.get("/ejs/new-product", (req, res) => {
	res.render("products/new-product", { chosenProduct: req.body });
});

module.exports = productRouter;
