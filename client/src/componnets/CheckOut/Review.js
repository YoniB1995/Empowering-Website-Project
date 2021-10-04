import React from 'react'
import { Descriptions } from 'antd';
import './payment.css'
import 'antd/dist/antd.css';

const Review = ({checkOutToken, backStep}) => {
    return (
        <div className="reviewDiv">
          
            {checkOutToken.live.line_items.map((product)=>{ return <Descriptions className="payMentHeader" size="small" title="פרטי מוצר" layout="vertical">
            <Descriptions.Item   label="שם המוצר">{product.name}</Descriptions.Item>
            <Descriptions.Item  label="כמות"> {product.quantity}</Descriptions.Item>
            <Descriptions.Item  label="מחיר"> {product.price.formatted_with_symbol}</Descriptions.Item>
            </Descriptions>
    })}   
        </div>
    )
}




export default Review

