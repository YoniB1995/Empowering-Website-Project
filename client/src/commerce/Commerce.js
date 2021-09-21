import React, { useState, useEffect } from 'react';
import Commerce from '@chec/commerce.js';
import ProductsC from '../componnets/features/Products/ProductsC';
import Cart from '../componnets/cart/Cart';
import { Badge} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

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

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    return (

        <Router>
            <div>
                <Switch>
                    <Route exact path='/Commercejs'>
                        <ProductsC products={products} handleAddToCart={handleAddToCart} />
                        <Link to="/Commercejs/Cart">

                            <Badge count={cart?.total_items} showZero totalItems={cart?.total_items}>
                                <ShoppingCartOutlined style={{ float: "right" }}/>
                            </Badge>
                        </Link>
                    </Route>
                    <Route path='/Commercejs/Cart'>
                        <Cart cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart} />
                    </Route>
                </Switch>
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