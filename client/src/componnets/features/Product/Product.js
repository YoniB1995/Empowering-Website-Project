import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllProducts } from "../../../service/product-service";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        let founded = result.products.find((product) => product._id === id);
        setProduct(founded);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div class="product">
        <div class="main">
          <div class="left">
            <h1>{product?.title}</h1>
            <br />
            <h3>{product?.price}$</h3>
            <img
              src="http://www.design.si.it/wp-content/uploads/2018/02/Sedia-di-design-nordico-legno-polipropilene-e-cuscino-grigio.png"
              alt=""
            />
          </div>
          <div class="right">
            <p>{product?.descripation}</p>
            <p>
              In stock. <a href="">Buy Extended Warranty</a>
            </p>
            <p>
              <span class="fa fa-star yellow"></span>
              <span class="fa fa-star yellow"></span>
              <span class="fa fa-star yellow"></span>
              <span class="fa fa-star yellow"></span>
              <span class="fa fa-star"></span>
              <span>(4.67 - 172 reviews)</span>
            </p>
            <p class="quantity">
              QUANTITY <span class="fa fa-angle-left angle"></span>
              <span id="qt">3</span>
              <span class="fa fa-angle-right angle"></span>
            </p>
          </div>

          <div class="right">
            <p>
              <span>total: </span>$960.00
            </p>
            <p>
              <button> Add to Cart</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
