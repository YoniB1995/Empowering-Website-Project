import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addProduct,
  editProduct,
  getAllProducts,
} from "../../../service/product-service";

const AddProduct = () => {
  const [ProductsId, setProductsId] = useState([]);
  const [product, setProduct] = useState([]);
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [products, setProducts] = useState([]);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, [reRender]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "img") {
      setFile(e.target.files[0]);
    } else {
      setProduct({ ...product, [name]: value });
    }
    console.log(product);
  };

  const updateProduct = (params) => {
    const ids = products.map(
      (type, i) => type.title === product.title && setProductsId(type._id)
    );
    params.preventDefault();
    const data = {
      id: ProductsId,
      title: product.title,
      description: product.description,
      markdown: product.markdown,
    };
    editProduct(data);
  };

  const insertProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:5000/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { fileName, filePath } = await res.data;

    setUploadedFile({ fileName, filePath });

    const data = {
      title: product.title,
      descripation: product.descripation,
      img: filePath,
      quantity: product.quantity,
      price: product.price,
      variants: product.variants,
    };
    addProduct(data).then(() => {
      window.location.pathname = "/Products";
    });
  };
  return (
    <>
      <form class="login-form">
        <div class="login-form__content">
          <h2>add product </h2>
          <input
            className="login-form__input"
            type="text"
            placeholder="title"
            name="title"
            value={product.title}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="text"
            name="descripation"
            placeholder="descripation"
            value={product.descripation}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="file"
            name="img"
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="number"
            name="quantity"
            placeholder="quantity"
            value={product.quantity}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="number"
            name="price"
            placeholder="price"
            value={product.price}
            required
            onChange={handleInputChange}
          />
          <input
            className="login-form__input"
            type="text"
            name="variants"
            placeholder="variants"
            value={product.variants}
            required
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button
            className="form-button"
            type="button"
            text="EDIT"
            onClick={insertProduct}
          >
            ADD product
          </button>

          <div class="login-form__links">
            <a class="login-form__link" href="./">
              <div>
                <Link to="/forgotpass">Forgot your password?</Link>
              </div>
              <div>
                <Link to="/Products">Go to products</Link>
              </div>
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
