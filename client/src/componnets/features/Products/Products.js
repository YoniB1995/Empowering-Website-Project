import React from 'react';
import ProductC from '../Product/Product';
import './Products.css'
import {useTranslation} from 'react-i18next'

const ProductsC = ({ products , handleAddToCart }) => {
    const {t} = useTranslation();
    return ( <div className="productsContainer"> 
        <h1 className="productsHeader">{t("StoreHeader")} </h1>
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
