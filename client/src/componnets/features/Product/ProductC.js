import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './ProductC.css';


const ProductC = ({ product, handleAddToCart }) => {
    const { Meta } = Card;
    return (
        
            <Card key={product.id}
                className="productCard"
                hoverable
                cover={<img alt="productImg" src={product.media.source} />}
            >
                <div>
                    <Meta title={product.name} />

                    <Meta description={product.price.formatted_with_symbol}></Meta>
                    {/* <Meta description={product.variant_groups.option.name} /> */}
                </div>
                <hr></hr>
                <span className="addToCart" onClick={() => handleAddToCart(product.id, 1)}>הוספה לסל+</span>
            </Card>
    )
}

export default ProductC;