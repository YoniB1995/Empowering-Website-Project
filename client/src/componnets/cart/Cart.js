import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import CartItem from './CartItem'
import { Badge} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import Button from '../features/Button/Button';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {
    const EmptyCart = () => {
        return <div>
            <h2>No products in cart</h2>
            <Link to='/Commercejs'>go to add product</Link>
        </div>
    };

    const FilledCart = () => {
        return <>
            <Button onClick={showDrawer}>
                            <span>סל קניות</span>
                            <Badge count={cart?.total_items} showZero totalItems={cart?.total_items}>
                                <ShoppingCartOutlined style={{ float: "right" }}/>
                            </Badge>
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible} >
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {cart?.line_items.map((item) => {
                    return <CartItem item={item}
                        handleUpdateCartQuantity={handleUpdateCartQuantity}
                        handleRemoveFromCart={handleRemoveFromCart} />
                })}
            </div>
            <div>
                <span>subtotal:</span>
                {cart.subtotal.formatted_with_symbol}
                <button style={{ width: 100, height: 20 }} type="button" onClick={() => handleEmptyCart()} >Empty Cart</button>
                <button style={{ width: 100, height: 20 }} type="button">Chekout</button>
            </div>
            </Drawer>

        </>
    }
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    console.log(cart)
    if (!cart.line_items) return "loading ..";
    return (
        <div>
            <h1>Your Cart</h1>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}

        </div>
    )
}

export default Cart;





