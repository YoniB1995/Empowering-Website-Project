import React from 'react'
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {getAllProducts} from '../../../service/store-service';



const Product = ()=> {
const { id } = useParams();

const [products, setProducts] = useState([]);
const [filteredProducts,setFilteredProducts] = useState([]);

useEffect(() => {
  getAllProducts()
    .then((res) => res.json())
    .then((result) => {
    setProducts(result.products);
    let newProductArray = products.filter((product)=>{ return product._id === id});
    setFilteredProducts(newProductArray); 
     })
}, []);



return(
    <div>
        {filteredProducts.map((product)=>{
            return(
            <>
            <h2>product id : {product._id}</h2>
            <h2>product title : {product.title}</h2>
            <h2>product description : {product.descripation}</h2>
            <h2>product price : {product.price}</h2>
            <h2>product quantity : {product.quantity}</h2>
            <h2>product variants : {product.variants}</h2>
            <img src={product.img}/>

            </>)
        })}
        </div>
)

}

export default Product
