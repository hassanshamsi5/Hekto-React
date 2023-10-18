import '../../App.css'
import bag1 from '../../Images/bag5.png'
import bag2 from '../../Images/bag4.png'
import bag3 from '../../Images/bag3.png'
import bag4 from '../../Images/bag2.png'
import bag5 from '../../Images/bag1.png'

import { React, useState } from 'react'
function App() {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    }
    const decrease = () => {
        setCounter(count => count - 1);
    }
    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Shopping Cart</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <table class="table main-content">
                                <thead>
                                    <tr className='border-none'>
                                        <th scope="col"><h3>Product</h3></th>
                                        <th scope="col"><h3>Price</h3></th>
                                        <th scope="col"><h3>Quantity</h3></th>
                                        <th scope="col"><h3>Total</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={bag1} alt="bag1" className='img-fluid' />
                                            <span>
                                                <h6>Ut diam consequat</h6>
                                                <p>Color:Brown</p>
                                                <p>Size:XL</p>
                                            </span>
                                        </td>
                                        <td>$32.00</td>
                                        <td>  <span>
                                            <div className="counter">
                                                <div className="btn__container">
                                                    <button className="control__btn mx-2" onClick={decrease}>-</button>
                                                    <span className="counter__output">{counter}</span>
                                                    <button className="control__btn mx-2" onClick={increase}>+</button>
                                                </div>
                                            </div>
                                        </span></td>
                                        <td>
                                            <h6>£219.00</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={bag2} alt="bag1" className='img-fluid' />
                                            <span>
                                                <h6>Ut diam consequat</h6>
                                                <p>Color:Brown</p>
                                                <p>Size:XL</p>
                                            </span>
                                        </td>
                                        <td>$32.00</td>
                                        <td>  <span>
                                            <div className="counter">
                                                <div className="btn__container">
                                                    <button className="control__btn mx-2" onClick={decrease}>-</button>
                                                    <span className="counter__output">{counter}</span>
                                                    <button className="control__btn mx-2" onClick={increase}>+</button>
                                                </div>
                                            </div>
                                        </span></td>
                                        <td>
                                            <h6>£219.00</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={bag3} alt="bag1" className='img-fluid' />
                                            <span>
                                                <h6>Ut diam consequat</h6>
                                                <p>Color:Brown</p>
                                                <p>Size:XL</p>
                                            </span>
                                        </td>
                                        <td>$32.00</td>
                                        <td>  <span>
                                            <div className="counter">
                                                <div className="btn__container">
                                                    <button className="control__btn mx-2" onClick={decrease}>-</button>
                                                    <span className="counter__output">{counter}</span>
                                                    <button className="control__btn mx-2" onClick={increase}>+</button>
                                                </div>
                                            </div>
                                        </span></td>
                                        <td>
                                            <h6>£219.00</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={bag4} alt="bag1" className='img-fluid' />
                                            <span>
                                                <h6>Ut diam consequat</h6>
                                                <p>Color:Brown</p>
                                                <p>Size:XL</p>
                                            </span>
                                        </td>
                                        <td>$32.00</td>
                                        <td>  <span>
                                            <div className="counter">
                                                <div className="btn__container">
                                                    <button className="control__btn mx-2" onClick={decrease}>-</button>
                                                    <span className="counter__output">{counter}</span>
                                                    <button className="control__btn mx-2" onClick={increase}>+</button>
                                                </div>
                                            </div>
                                        </span></td>
                                        <td>
                                            <h6>£219.00</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={bag5} alt="bag1" className='img-fluid' />
                                            <span>
                                                <h6>Ut diam consequat</h6>
                                                <p>Color:Brown</p>
                                                <p>Size:XL</p>
                                            </span>
                                        </td>
                                        <td>$32.00</td>
                                        <td>  <span>
                                            <div className="counter">
                                                <div className="btn__container">
                                                    <button className="control__btn mx-2" onClick={decrease}>-</button>
                                                    <span className="counter__output">{counter}</span>
                                                    <button className="control__btn mx-2" onClick={increase}>+</button>
                                                </div>
                                            </div>
                                        </span></td>
                                        <td>
                                            <h6>£219.00</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row mt-5">
                                <div className="col-md-6 col-6">
                                    <button className='btntheme'>Update Cart</button>
                                </div>
                                <div className="col-md-6 col-6 text-end">
                                    <button className='btntheme'>Clear Cart</button>
                                </div>
                            </div>
                            <div className="mt-5"></div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <h3 className='text-center'>Cart Totals</h3>
                            <div className="row  main-content faq p-4">
                                <div className="col-md-6 col-6">
                                    <h5>Subtotals:</h5>
                                </div>
                                <div className="col-md-6 col-6 text-center">
                                    <h5>£219.00</h5>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                                <div className="row mt-4"></div>
                                <div className="col-md-6 col-6">
                                    <h5>Totals:</h5>
                                </div>
                                <div className="col-md-6 col-6 text-center">
                                    <h5>£325.00</h5>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>

                                <div class="custom-control custom-checkbox my-3 mr-sm-2">
                                    <input type="checkbox" class="custom-control-input bg-00" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Shipping & taxes calculated at checkout</label>
                                </div>
                                <button className='btntheme2'>Proceed To Checkout</button>
                            </div>
                            <h3 className='text-center mt-5'>Calculate Shopping</h3>
                            <div className="row  main-content faq p-4 mt-3">
                                <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Pakistan" />
                                <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Karachi" />
                                <input type="text" className="form-control field mt-4" id="exampleFormControlInput1" placeholder="Postal Code" />
                                <button className='btntheme w-50 mt-4'>Calculate Shiping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default App

