import { useEffect, useState } from "react";
import "./Store.css";
import Card from '../../features/card/Card';
import {getAllProducts} from '../../../service/store-service';
import {Link} from 'react-router-dom';



const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
      });
  }, []);

  console.log("proudcts: ", products);
  return (
    <div className="store-div">
      {products.map((product) => {
        return <Link to={`/Product/${product._id}`}><Card icon={product.price} title={product.title} /></Link>;
      })}
    </div>
  );
};

export default Store;
