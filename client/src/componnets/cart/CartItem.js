import React from 'react';
import { Card } from 'antd';

// import Button from '../features/Button/Button';


const CartItem = ({ item, handleUpdateCartQuantity, handleRemoveFromCart }) => {
    const { Meta } = Card;
    return (
        <div>
            <Card
                hoverable
                style={{width: 300, height: 400, margin: 20, padding: 10 }}
                cover={<img alt="productImg" src={item.media.source} style={{ width: 280, height: 200, }} />}
            >
                <Meta title={item.name} />
                <Meta description={item.line_total.formated_with_symbol} />
                <button style={{ width: 80, height: 20, margin: 2 }} type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}>+</button>
                <Meta title={item.quantity} />
                <button style={{ width: 80, height: 20 }} type="button" onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}>-</button>
                <button style={{ width: 80, height: 20 }} type="button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </Card>

        </div>
    )
}

export default CartItem







    