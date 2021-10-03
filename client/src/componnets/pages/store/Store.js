import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Commerce from '@chec/commerce.js';
import ProductsC from '../../features/Products/Products';
import { Badge } from 'antd';
import { Drawer, Button, Modal } from 'antd';
import CartItem from '../../cart/CartItem';
import 'antd/dist/antd.css';
import './store.css'
import { Spin } from 'antd';
import Input from '../../features/Input/Input';
import ButtonComponent from '../../features/Button/ButtonComponent';
import CheckOut from '../../CheckOut/CheckOut';
const REACT_APP_CHEC_PUBLIC_KEY = process.env.REACT_APP_CHEC_PUBLIC_KEY || "pk_332356f9128204a342117237f03a4f7afd9a55c1d788d";
export const commerce = new Commerce(REACT_APP_CHEC_PUBLIC_KEY, true);

const CommerceJs = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})
    const [isCardOnCart,setIsCardOnCart ] = useState(false);

    const fetchProducts = async () => {
        const data = await commerce.products.list();
        setProducts(data.data);
    }
    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart)
    }
    console.log(cart);
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
        return <Drawer title="סל הקניות שלך" placement="right" onClose={onClose} visible={visible}>
            <div>
                <h2>אין מוצרים בעגלה</h2>
                <a href="http://localhost:3000/Commercejs">לרכישת מוצרים הקלק כאן</a>
            </div>
        </Drawer>
    };


    const check = () => {
        cart.line_items.map(item => (item.product_id === "prod_RqEv5xXOxk5Zz4") ? setIsCardOnCart(true) : setIsCardOnCart(false));
        
    }
    const checkpath = "/Commercejs/CheckOut"
    const ModalForm = () => {
        const [isModalVisible, setIsModalVisible] = useState(false);

        const showModal = () => {
            setIsModalVisible(true);
        };

        const handleOk = () => {
            setIsModalVisible(false);
        };

        const handleCancel = () => {
            setIsModalVisible(false);
        };
        return <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="פרטים אישיים" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <label>שם מלא</label>
                <Input type="text" name="user_email" className="contact" />
                <label>אימייל</label>
                <Input type="email" name="user_email" className="contact" />
            </Modal>
        </div>
    }
    const FilledCart = () => {
        return <>
            <div>
                <Button onClick={showDrawer} className="badge">
                    { } <Badge count={cart?.total_items} showZero totalItems={cart?.total_items}>
                        <i class="fas fa-shopping-cart" ></i>
                    </Badge>
                </Button>
                <div className="drawer">
                    <Drawer title="סל הקניות שלך" placement="right" onClose={onClose} visible={visible} >
                        <div style={{ top: 304, left: 1281, height: 350, textAlign: "center" }}>
                            {cart?.line_items.map((item) => {
                                return <CartItem item={item}
                                    handleUpdateCartQuantity={handleUpdateCartQuantity}
                                    handleRemoveFromCart={handleRemoveFromCart} />
                            })}
                        </div>
                        <div className="subtotal">
                            <span>סה"כ לתשלום:</span>
                            {cart.subtotal.formatted_with_symbol}
                            <ButtonComponent type="button" onClick={() => handleEmptyCart()} className="btnCart" id="btnOne" text="רוקן עגלה"></ButtonComponent>
                                {/* <Link to="/Commercejs/CheckOut" ><ButtonComponent  type="button" text="לקופה" className="btnCart" id="btnTwo"></ButtonComponent ></Link> */}
                            <ButtonComponent onClick={check} type="button" text="לקופה" className="btnCart" id="btnTwo"></ButtonComponent >
                            <Link to={isCardOnCart?"/Commercejs/CheckOut" :"/Commercejs"}><button>here</button></Link>


                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    }
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
    if (!cart.line_items) return <div className="spin"><Spin size="large" /></div>
    return (
        <div>
            <div>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </div>
            <Switch>
                <Route exact path='/Commercejs'>
                    <ProductsC products={products} handleAddToCart={handleAddToCart} />
                </Route>
                <Route exact path='/Commercejs/CheckOut'>
                    < CheckOut cart={cart} handleEmptyCart={handleEmptyCart} />
                </Route>
            </Switch>
        </div>
    )
}
export default CommerceJs;
