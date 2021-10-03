import React from 'react';
import ProductC from '../Product/Product';
import './Products.css'

const ProductsC = ({ products , handleAddToCart }) => {
    return ( <div className="productsContainer"> 
        <h1 className="productsHeader">החנות שלנו </h1>
        <div className="product">
        <div className="card_container">
        {products?.map((product) => {
            return <ProductC product={product} handleAddToCart={handleAddToCart} />
        })
     } </div>
     </div>
     </div>
    )
}
export default ProductsC;
