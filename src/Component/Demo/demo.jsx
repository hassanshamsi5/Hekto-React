import '../../App.css'
import mini9 from '../../Images/Rectangle 34.png'
import mini10 from '../../Images/Rectangle 144.png'
import mini11 from '../../Images/Rectangle 145.png'
import mini12 from '../../Images/Rectangle 146.png'
import mini13 from '../../Images/Rectangle 147.png'

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Hekto Demo</h1>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container  mt-5">
                    <div className="row ">
                        <h4 className='main-content'>Hekto Demo</h4>
                        <h6 className='main-content'>Cart/ Information/ Shipping/ Payment</h6>
                        <div className="col-md-6 ">
                            <div className="faq p-3">
                                <div className="row mt-5 ">
                                    <div className="col-md-7">
                                        <h4 className='main-content'>Contact Information</h4>
                                    </div>
                                    <div className="col-md-5">
                                        <span>Already have an account?</span>
                                        <span>Log in</span>
                                    </div>
                                </div>
                                <div className="mb-3 mt-5">
                                    <input type="number" className="form-control field" id="exampleFormControlInput1" placeholder="Email or mobile phone number*" />
                                </div>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <input type="checkbox" className="custom-control-input bg-00" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Keep me up to date on news and excluive offers</label>
                                </div>
                                <div className="row mt-5">
                                    <h4 className='main-content'>Shipping address</h4>
                                    <div className="col-md-6">
                                        <input type="email" class="form-control field " id="exampleFormControlInput1" placeholder="First name (optional)" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" class="form-control field" id="exampleFormControlInput1" placeholder="Last name" />
                                    </div>
                                </div>
                                <div className="mt-3"></div>
                                <input type="email" class="form-control field" id="exampleFormControlInput1" placeholder="Address" />
                                <div className="mt-3"></div>

                                <input type="email" class="form-control field" id="exampleFormControlInput1" placeholder="Appaetnentment,suit,e.t.c (optinal)" />
                                <div className="mt-3"></div>

                                <input type="email" class="form-control field" id="exampleFormControlInput1" placeholder="City" />
                                <div className="mt-3"></div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="email" class="form-control field " id="exampleFormControlInput1" placeholder="State" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" class="form-control field" id="exampleFormControlInput1" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12">

                                        <button className='btntheme w-50'>Continue Shipping</button>
                                    </div>
                                </div>
                                <div className="mt-5 py-5"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <img src={mini9} alt="mini9" className='img-fluid' />
                                </div>
                                <div className="col-md-5 col-6">
                                    <h6>Ut diam consequat</h6>
                                    <p>Color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                                <div className="col-md-3 col-3 mt-4">
                                    <p>$32.00</p>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                                <div className="col-md-3 col-3">
                                    <img src={mini10} alt="mini9" className='img-fluid' />
                                </div>
                                <div className="col-md-5 col-6">
                                    <h6>Ut diam consequat</h6>
                                    <p>Color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                                <div className="col-md-3 col-3 mt-4">
                                    <p>$32.00</p>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                                <div className="col-md-3 col-3">
                                    <img src={mini11} alt="mini9" className='img-fluid' />
                                </div>
                                <div className="col-md-5 col-6">
                                    <h6>Ut diam consequat</h6>
                                    <p>Color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                                <div className="col-md-3 col-3 mt-4">
                                    <p>$32.00</p>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                                <div className="col-md-3 col-3">
                                    <img src={mini12} alt="mini9" className='img-fluid' />
                                </div>
                                <div className="col-md-5 col-6">
                                    <h6>Ut diam consequat</h6>
                                    <p>Color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                                <div className="col-md-3 col-3 mt-4">
                                    <p>$32.00</p>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                                <div className="col-md-3 col-3">
                                    <img src={mini13} alt="mini9" className='img-fluid' />
                                </div>
                                <div className="col-md-5 col-6">
                                    <h6>Ut diam consequat</h6>
                                    <p>Color:Brown</p>
                                    <p>Size:XL</p>
                                </div>
                                <div className="col-md-3 col-3 mt-4">
                                    <p>$32.00</p>
                                </div>
                                <div className="border-bottom mt-md-3 m-2 ms-0"></div>
                            </div>
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
                                    <label class="custom-control-label" for="customControlInline">Shipping & taxes calculated at checkout</label>
                                </div>
                                <button className='btntheme2'>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5 py-5"></div>



        </>
    )
}
export default App

