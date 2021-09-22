import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';
import ProductsC from '../../features/Products/ProductsC';
import Cart from '../../cart/Cart';
import { Badge} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import CartItem from '../../cart/CartItem';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const REACT_APP_CHEC_PUBLIC_KEY = "pk_332356f9128204a342117237f03a4f7afd9a55c1d788d";
export const commerce = new Commerce(REACT_APP_CHEC_PUBLIC_KEY, true);


const CommerceJs = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})
    const fetchProducts = async () => {
        const data = await commerce.products.list();
        setProducts(data.data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart)
    }
    const handleAddToCart = async (productId, quanitity) => {
        const { cart } = await commerce.cart.add(productId, quanitity);
        setCart(cart);
    }
    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) => {
        const { cart } = commerce.cart.remove(productId)
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }
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
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
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

        </>}
            useEffect(() => {
                fetchProducts();
                fetchCart();
            }, []) 
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

        <Router>
            <div>
                <Switch>
                    <Route exact path='/Commercejs'>
                        <ProductsC products={products} handleAddToCart={handleAddToCart} />
                        {/* <Link to="/Commercejs/Cart">
                            <Badge count={cart?.total_items} showZero totalItems={cart?.total_items}>
                                <ShoppingCartOutlined style={{ float: "right" }}/>
                            </Badge>
                        </Link> */}
                    </Route>
                    <Route path='/Commercejs/Cart'>
                        <Cart cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart} />
                    </Route>
                </Switch>
                <div>
            {/* <h1>Your Cart</h1> */}
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}

        </div>
            </div>
        </Router>

    )
}
export default CommerceJs;




{/* <Router>
<div>
    <span>סל קניות</span>
    <Switch>
        <Route exact path='/'>
            <ProductsC products={products} onAddToCart={handleAddCart} />
        </Route>
        <Badge count={cart.total_items} showZero totalItems={cart.total_items}>
            <ShoppingCartOutlined style={{ float: "right" }} />
        </Badge>
        <Route path='/cart'>
            <Cart cart={cart} />
        </Route>
    </Switch>
</div>
</Router> */}






{/* <Button type="primary" onClick={showDrawer}>
Open
</Button> */}