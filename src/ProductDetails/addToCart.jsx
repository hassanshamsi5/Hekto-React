import React, { useEffect, useState } from 'react';
import {
    //  useLocation,
    useNavigate
} from 'react-router-dom';

import { Alert } from 'antd';


const Addtocart = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartItemsFromLocalStorage();
    }, []);

    const loadCartItemsFromLocalStorage = () => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    };

    useEffect(() => {
        if (showAlert) {
            const timeoutId = setTimeout(() => {
                setShowAlert(false)
            }, 5000)
            return () => clearTimeout(timeoutId);
        }
    }, [showAlert])

    const updateQuantity = (itemId, newQuantity) => {
        newQuantity = Math.max(1, Math.min(newQuantity, 10))

        if (newQuantity >= 10) {
            setShowAlert(true)

        } else {
            setShowAlert(false)
        }
        const updatedCartItems = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }

    const update = () => {
        navigate('/api')
    }

    const clear = () => {
        localStorage.clear()
        window.location.reload()
    }
    const proceedToCheckout = () => {
        const isAuthenticated = null
        if (isAuthenticated) {
            navigate('/checkout')
        } else {
            navigate('/signin')
        }
    };                    
  

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3>Shopping Cart</h3>
                    {showAlert && <Alert message="limited stock" type="error" />}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img src={item.image} width={50} height={50} alt={item.title} />&nbsp; &nbsp;
                                            {item.title}
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>
                                            <span style={{ cursor: 'pointer' }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</span>
                                            <span> {item.quantity}</span>
                                            <span style={{ cursor: 'pointer' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</span>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Your cart is empty</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-md-6 col-6">
                            <button onClick={() => update()} className='btn btn-primary'>Update cart</button>
                        </div>
                        <div className="col-md-6 col-6 text-end">
                            <button onClick={() => clear()} className='btn btn-primary'>Clear cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <h3 className='text-center'>Cart Totals</h3>
                    <div className="row  main-content faq p-4">
                        <div className="col-md-6 col-6">
                            <h5>Subtotals:</h5>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                            <h5>${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</h5>
                        </div>
                        <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                        <div className="row mt-4"></div>
                        <div className="col-md-6 col-6">
                            <h5>Totals:</h5>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                            <h5>${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</h5>
                        </div>
                        <div className="border-bottom mt-md-3 m-2 ms-0"></div>

                        <div className="custom-control custom-checkbox my-3 mr-sm-2">
                            <input type="checkbox" className="custom-control-input bg-00" id="customControlInline" />&nbsp;
                            <label className="custom-control-label" htmlFor="customControlInline"> Shipping & taxes calculated at checkout</label>
                        </div>
                        <button className='btn btn-primary w-50' onClick={() => proceedToCheckout()}>
                            Proceed to checkout
                        </button>
                    </div>
                    <h3 className='text-center mt-5'>Calculate Shopping</h3>
                    <div className="row  main-content faq p-4 mt-3">
                        <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Pakistan" />
                        <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Karachi" />
                        <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Postal Code" />
                        <button className='btn btn-primary w-50 mt-4'>Calculate Shiping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtocart;


