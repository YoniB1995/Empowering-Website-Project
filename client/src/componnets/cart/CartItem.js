import React, { useState } from 'react';
import { Card } from 'antd';
// import 'antd/dist/antd.css';
import './cartItem.css';
// import Button from '../features/Button/Button';


const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                hoverable
                style={{ width: 250, height: 100, opacity: 1, textAlign: "left", margin: 10, marginLeft: -20 }}
                cover={<img alt="productImg" src={item.media.source} style={{ width: 75, height: 75, top: 442, float: "right", borderRadius: 37 }} />}
            >
                <div className="detailsProduct">
                    <Meta title={item.name} />
                    <Meta description={item.line_total.formated_with_symbol} />

                    <span type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</span>
                    <Meta title={item.quantity} />
                    <span type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</span>
                    {/* <button style={{ width: 20, height: 20 }} type="button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button> */}
           
                </div>
            </Card>

        </div>
    )
}

export default CartItem







