import React from 'react'
import { Descriptions } from 'antd';
import './checkOut.css'

const Review = ({checkOutToken, backStep}) => {
    return (
        <div className="reviewDiv">
            <Descriptions size="small" title="Cart Info" layout="vertical">
            {checkOutToken.live.line_items.map((product)=>{ return <Descriptions.Item label="product name">{product.name}
             {product.quantity}
             {product.price.formatted_with_symbol}</Descriptions.Item>
    })}
    <Descriptions.Item >{ checkOutToken.live.subtotal.formatted_with_symbol}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default Review

