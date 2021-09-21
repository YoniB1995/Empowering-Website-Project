import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';
import ProductsC from '../componnets/features/Products/ProductsC';
const REACT_APP_CHEC_PUBLIC_KEY="pk_332356f9128204a342117237f03a4f7afd9a55c1d788d";
export const commerce = new Commerce(REACT_APP_CHEC_PUBLIC_KEY, true);


const CommerceJs = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const data = await commerce.products.list();
        setProducts(data.data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
        <ProductsC products={products}/>
        </div>
    )
}
export default CommerceJs;