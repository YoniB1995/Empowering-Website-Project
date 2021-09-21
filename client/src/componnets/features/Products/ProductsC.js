import React from 'react';
import ProductC from '../Product/ProductC';


const ProductsC = ({ products }) => {
    return ( products?.map((product) => {
            return <ProductC product={product} />
        })
    )
}
export default ProductsC;
