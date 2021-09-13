// const productModel = require("../models/productModel");
// const ErrorResponse = require("../utils/errorResponse");

// const getAllProducts = async (req, res, next) => {
// 	try {
// 		const products = await productModel.find({});
// 		console.log(products);

// 		res.status(200).json({ products });
// 	} catch (e) {
// 		console.log("products list not found");
// 		next(new ErrorResponse("server error", 400));
// 	}
// };

// const getProduct = async (req, res, next) => {
// 	try {
// 		const product = await productModel.findById(req.params.id);
// 		console.log(product);
// 		res.status(200).json({ product });
// 	} catch (e) {
// 		console.log("product not found");
// 		next(new ErrorResponse("server error", 400));
// 	}
// };

// const createProduct = async (req, res, next) => {
// 	try {
// 		const insertProduct = await productModel.insertMany(req.body);
// 		console.log(insertProduct);
// 		res.status(200).json({ insertProduct });
// 	} catch (e) {
// 		console.log("cannot add product to the store products");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// const deleteProduct = async (req, res, next) => {
// 	try {
// 		const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
// 		console.log(deletedProduct);
// 		res.status(200).json({ deletedProduct });
// 	} catch (e) {
// 		console.log("cannot delete product from the data base");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// const updateProduct = async (req, res, next) => {
// 	try {
// 		const updatedproduct = await productModel.findByIdAndUpdate(
// 			req.params.id,
// 			req.body
// 		);
// 		res.status(200).json({ updatedproduct });
// 	} catch (e) {
// 		console.log("cannot found product ");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// const updateProductAndRender = async (req, res, next) => {
// 	try {
// 		const updatedproduct = await productModel.findByIdAndUpdate(
// 			req.params.id,
// 			req.body
// 		);
// 		res.render("products/updateProduct", { updatedproduct });
// 		res.status(200).json({ updatedproduct });
// 	} catch (e) {
// 		console.log("cannot found product ");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// const getEjsProducts = async (req, res, next) => {
// 	try {
// 		const products = await productModel.find({});
// 		res.render("products/index", { products });
// 	} catch (e) {
// 		console.log("cannot found product ");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// const getEjsProduct = async (req, res, next) => {
// 	try {
// 		const product = await productModel.findById(req.params.id);
// 		res.render("products/selected-product", { product });
// 	} catch (e) {
// 		console.log("cannot found product ");
// 		next(new ErrorResponse("server error", 500));
// 	}
// };

// module.exports = {
// 	getAllProducts,
// 	getProduct,
// 	createProduct,
// 	deleteProduct,
// 	updateProduct,
// 	getEjsProducts,
// 	getEjsProduct,
// };

const { validProduct, productModel } = require("../models/productModel");
const ErrorResponse = require("../utils/errorResponse");

const getAllProducts = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }));
    }
    const products = await productModel.find({});
    if (!products) {
      console.log("no product in collection");
    }
  } catch (e) {
    next(new ErrorResponse("server error", 500));
  }
};
//      const products = await productModel.find({});
//      console.log(products);

//      res.status(200).json({ products });

// };

const getProduct = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }));
    }
    const product = await productModel.findById(req.params.id);
    console.log(product);
    res.status(200).json({ product });
  } catch (e) {
    console.log("product not found");
    next(new ErrorResponse("server error", 400));
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }, 301));
    }
  } catch (e) {
    next(new ErrorResponse("bad request", 301));
  }

  try {
    const product = await productModel.insertMany([req.body]);
    if (!product) {
      console.log("no product in collection");
    }
  } catch (e) {
    next(new ErrorResponse("server error", 500));
  }
};
//      const insertProduct = await productModel.insertMany(req.body);
//      console.log(insertProduct);
//      res.status(200).json({ insertProduct });
//  } catch (e) {
//      console.log("cannot add product to the store products");
//      next(new ErrorResponse("server error", 500));
//  }
// };

const deleteProduct = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }));
    }
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    console.log(deletedProduct);
    res.status(200).json({ deletedProduct });
  } catch (e) {
    console.log("cannot delete product from the data base");
    next(new ErrorResponse("server error", 500));
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }));
    }
    const updatedproduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ updatedproduct });
  } catch (e) {
    console.log("cannot found product ");
    next(new ErrorResponse("server error", 500));
  }
};

const updateProductAndRender = async (req, res, next) => {
  try {
    const { error } = validProduct(req.body);
    if (error) {
      next(new ErrorResponse({ error: error.details[0].message }));
    }
    const updatedproduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.render("products/updateProduct", { updatedproduct });
    res.status(200).json({ updatedproduct });
  } catch (e) {
    console.log("cannot found product ");
    next(new ErrorResponse("server error", 500));
  }
};

const getEjsProducts = async (req, res, next) => {
  try {
    const products = await productModel.find({});
    res.render("products/index", { products });
  } catch (e) {
    console.log("cannot found product ");
    next(new ErrorResponse("server error", 500));
  }
};

const getEjsProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.render("products/selected-product", { product });
  } catch (e) {
    console.log("cannot found product ");
    next(new ErrorResponse("server error", 500));
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getEjsProducts,
  getEjsProduct,
};
