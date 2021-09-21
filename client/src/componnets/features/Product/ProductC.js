import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './ProductC.css'


const ProductC = ({ product }) => {
    const { Meta } = Card;
    return (
        <div className="card_comtainer">
            <Card key={product.id}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="product" src={product.media.source}/>}
            >
                <Meta  title={product.name} description={product.description}/>
                <Meta  description={product.price.formatted_with_symbol}/>
                {/* dangerouslySetInnerHTML={{ __html: product.description}} */}
            </Card>
        </div>
    )
}

export default ProductC;