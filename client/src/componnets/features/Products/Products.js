import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
} from "../../../service/product-service";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, [reRender]);
  const onDelete = (product) => {
    deleteProduct(product);
  };
  return (
    <>
      {/* <h2 style={{ textAlign: "center" }}>
        products Lists & ID {reRender ? "." : ","}
      </h2>
      <main id="content" class="main-area">
        <ul class="cards1">
          {products.map((product, i) => {
            return (
              <li class={`card1-item ${i % 4 === 0 && "double"}`}>
                <figure class="card1">
                  <img
                    src="https://source.unsplash.com/crVO0UMdoVU/600x600"
                    alt="B/each. Photo by Andreas Rønningen"
                  />
                  <figcaption class="caption">
                    <h3 class="caption-title">{product.markdown}</h3>
                    <div class="location">{product.title}</div>
                    <p>{product.description}</p>
                    <Link to={`/product/${product._id}`}>read more</Link>
                  </figcaption>
                  <button>
                    <Link to={`/Admin/EditProducts/${product._id}`}>edit</Link>
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(product);
                      setReRender((old) => !old);
                    }}
                  >
                    delete
                  </button>
                </figure>
              </li>
            );
          })}
        </ul>
      </main> */}
      <h1 style={{ textAlign: "center" }}>products</h1>
      <div class="row">
        <h3 class="title">
          <Link to="/Admin/AddProduct">add</Link>
        </h3>
        {products.map((product, i) => {
          return (
            <div class="col-md-3 col-sm-6">
              <div class="product1-grid">
                <div class="product1-image">
                  <a href="#" class="image">
                    <img
                      class="pic-1"
                      src="https://images.unsplash.com/photo-1630524233940-8fda17e3d190?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                  </a>
                  <span class="product1-sale-label">
                    {reRender ? "Sale" : "as"}
                  </span>
                  <button
                    onClick={() => {
                      onDelete(product);
                      setReRender((old) => !old);
                    }}
                    class="product1-sale-label"
                  >
                    delete
                  </button>
                  <ul class="product1-links">
                    <li>
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <Link to={`/product/${product._id}`}>
                        <i class="fas fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="product1-content">
                  <h3 class="title">
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                  </h3>
                  <h3 class="title">
                    <Link to={`/Admin/EditProducts/${product._id}`}>edit</Link>
                  </h3>
                  <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="far fa-star"></li>
                    <li class="far fa-star"></li>
                  </ul>
                  <div class="price">
                    <span>$93.10</span> $73.10
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
