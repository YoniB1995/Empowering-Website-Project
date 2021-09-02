import { useEffect, useState } from "react";
import "./Store.css";
import Card from '../../features/card/Card';
import {getAllProducts} from '../../../service/store-service';



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
        return <Card icon={product.price} title={product.title} />;
      })}
    </div>
  );
};

export default Store;
