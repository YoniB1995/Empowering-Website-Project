import React from 'react';
import ProductC from '../Product/Product';
import './Products.css'

const ProductsC = ({ products , handleAddToCart }) => {
    return ( <div className="card_container">
        {products?.map((product) => {
            return <ProductC product={product} handleAddToCart={handleAddToCart} />
        })
     } </div>
    )
}
export default ProductsC;
