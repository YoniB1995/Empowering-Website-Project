import React from 'react';
import { Card } from 'antd';
import './cartItem.css';

const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                hoverable
                style={{ width: 250, height: 100, opacity: 1, textAlign: "left", margin: 10, marginLeft: -20 }}
                cover={<img alt="productImg" src={item.media.source} style={{ width: 70, height: 70, top: 442, float: "right",marginTop:15}} />}
            >
                <div className="detailsProduct">
                    <Meta title={item.name} />
                    <Meta description={item.line_total.formated_with_symbol} />

                    <span style={{fontWeight:"bold"}} type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</span>
                    <Meta title={item.quantity} />
                    <span style={{fontWeight:"bold"}} type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</span>
           
                </div>
            </Card>

        </div>
    )
}

export default CartItem







