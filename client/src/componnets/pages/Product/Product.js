import React from 'react'
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {getAllProducts} from '../../../service/store-service';
import './Product.css';



const Product = ()=> {
const { id } = useParams();

const [products, setProducts] = useState([]);
const [filteredProducts,setFilteredProducts] = useState([]);
const [like,setLike] = useState(0);

useEffect(() => {
  getAllProducts()
    .then((res) => res.json())
    .then((result) => {
    setProducts(result.products);
    let newProductArray = products.filter((product)=>{ return product._id === id});
    setFilteredProducts(newProductArray); 
     })
}, [products]);

const likesCounter = ()=>{
    setLike(like+1);
}



return(
    <div className="product-div">
        {filteredProducts.map((product)=>{
            return(
            <>
            <h2>product id : {product._id}</h2>
            <h2>product title : {product.title}</h2>
            <h2>product description : {product.descripation}</h2>
            <h2>product price : {product.price}</h2>
            <h2>product quantity : {product.quantity}</h2>
            <h2>product variants : {product.variants}</h2>
            <button onClick={likesCounter}>אהבתי</button>
            likes:{like}

            </>)
        })}
        </div>
)

}

export default Product
