import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  editProduct,
  getAllProducts,
} from "../../../../service/product-service";
import "./EditProducts.css";

const EditProducts = () => {
  const [product, setProduct] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => {
        let founded = result.products.find((product) => product._id === id);
        setProduct(founded);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTitle(product?.title);
    setDescription(product?.descripation);
    setPrice(product?.price);
  }, [product]);

  useEffect(() => {
    setProduct((oldObj) => ({ ...oldObj, title, description, price }));
  }, [title, description, price]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    editProduct(product)
      .then(() => {
        window.location.pathname = "/Products";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100vw",
        zIndex: "1111",
      }}
    >
      <h1>עריכת מוצר</h1>
      <div id="form-main">
        <div id="form-div">
          <form onSubmit={handleSubmit} class="form" id="form1">
            <p class="title">
              <label htmlFor="title">title</label>
              <input
                name="title"
                type="text"
                class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(product);
                }}
              />
            </p>

            <p class="email">
              <label htmlFor="price">price</label>
              <input
                name="email"
                type="number"
                class="validate[required,custom[email]] feedback-input"
                id="email"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </p>

            <p class="text">
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                class="validate[required,length[6,300]] feedback-input"
                id="comment"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>

            <div class="submit">
              <input type="submit" value="save changes" id="button-blue" />
              <div class="ease"></div>
            </div>
            <button>
              <Link to="/Products">cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
