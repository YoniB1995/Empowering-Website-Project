import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../service/store-service";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [like, setLike] = useState(0);

  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => {
        const newProduct = result.products.find((product) => {
          return product._id === id;
        });
        setProduct(newProduct);
      });
  }, []);

  const likesCounter = () => {
    setLike(like + 1);
  };

  return product ? (
    <div className="product-div">
      <>
        <h2>product id : {product._id}</h2>
        <h2>product title : {product.title}</h2>
        <h2>product description : {product.descripation}</h2>
        <h2>product price : {product.price}</h2>
        <h2>product quantity : {product.quantity}</h2>
        <h2>product variants : {product.variants}</h2>
        <button onClick={likesCounter}>אהבתי</button>
        likes:{like}
      </>
    </div>
  ) : (
    <div>מוצר לא נמצא</div>
  );
};

export default Product;
