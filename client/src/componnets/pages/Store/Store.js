import {useEffect,useState} from "react"
import "./Store.css";
import Card from '../../features/card/Card';

const API =
  process.env.NODE_ENV === "production"
    ? `https://yonib.herokuapp.com`
    : "http://localhost:5000";

const Store = ()=>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then(result => setProducts(result));
  }, []);

    return(
        <div className="store-div">
            {products.map((product)=>{
            <Card title={product.title} icon={product.descripation}/>
        })}

        </div>
    )
}

export default Store;