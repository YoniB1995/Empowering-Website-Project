import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './ProductC.css';
import { ShoppingCartOutlined } from '@ant-design/icons';


const ProductC = ({ product, handleAddToCart }) => {
    const { Meta } = Card;
    return (
        <div >
            <Card key={product.id}
                className="productCard"
                hoverable
                cover={<img alt="productImg" src={product.media.source} />}
            >
                <Meta title={product.name} description={product.description} />
                <Meta description={product.price.formatted_with_symbol} />
                <i class="fas fa-shopping-cart icon" onClick={() => handleAddToCart(product.id, 1)}></i>
            </Card>

        </div>
    )
}

export default ProductC;