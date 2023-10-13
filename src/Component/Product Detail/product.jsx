import '../../App.css'
import img55 from '../../Images/55.png'
import bag1 from '../../Images/Rectangle 134.png'
import bag2 from '../../Images/Rectangle136.png'
import bag3 from '../../Images/Rectangle137.png'
import bag4 from '../../Images/Rectangle138.png'
import facebook from '../../Images/Group1.png'
import insta from '../../Images/Group2.png'
import twitter from '../../Images/Group3.png'
import Rp1 from '../../Images/Rectangle128.png'
import Rp2 from '../../Images/Rectangle133.png'
import Rp3 from '../../Images/Rectangle130.png'
import Rp4 from '../../Images/Rectangle131.png'


import React from 'react';
import { Rate } from 'antd';
function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Product Details</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Product Details</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content mt-5 shadow ">
                    <div className="row justify-content-center align-items-center ">
                        <div className="col-md-2">
                            <img src={bag1} className='img-fluid' alt="bag1" />
                            <img src={bag2} className='img-fluid' alt="bag2" />
                            <img src={bag3} className='img-fluid' alt="bag3" />

                        </div>
                        <div className="col-md-5">
                            <img src={bag4} className='img-fluid' alt="bag4" />

                        </div>
                        <div className="col-md-5">
                            <h1>Playwood arm chair</h1>

                            <Rate allowHalf defaultValue={2.5} />(22)
                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <h5>$32.00</h5>
                                </div>
                                <div className="col-md-2">
                                    <h5><del className='text-1'>$32.00</del></h5>
                                </div>
                                <h4>Color</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                                <h4 className='mt-3'>Add To cart
                                    <span className='mx-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z" fill="#535399" />
                                        </svg>
                                    </span>
                                </h4>
                                <div className="row mt-3">
                                    <h4>Categories:</h4>
                                    <h4>Tags</h4>
                                    <h4>Share
                                        <span>
                                            <img src={facebook} className='img-fluid mx-2' alt="facebook" />
                                            <img src={insta} className='img-fluid mx-2' alt="insta" />
                                            <img src={twitter} className='img-fluid mx-2' alt="twitter" />
                                        </span>
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='faq mt-5'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 main-content ">
                            <div className="row mt-5">
                                <div className="col-md-3 col-6 hov-2">
                                    <h3>Description</h3>
                                </div>
                                <div className="col-md-3 col-6 hov-2">
                                    <h3>Additional Info</h3>
                                </div>
                                <div className="col-md-3 col-6 hov-2">
                                    <h3>Reviews</h3>
                                </div>
                                <div className="col-md-3 col-6 hov-2">
                                    <h3>Video</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 main-content">
                            <h4>Varius tempor.</h4>
                            <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 main-content">
                            <h4>More details</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                            <span className='text-01'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                            <div className='mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                                <span className='text-01'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                            </div>
                            <div className='mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                                <span className='text-01'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                            </div>
                            <div className='mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                                <span className='text-01'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</span>
                            </div>
                            <div className="mt-5"></div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="container main-content">
                    <div className="row mt-5">
                        <h3>Related Products</h3>
                        <div className="col-md-3">
                            <img src={Rp1} alt="Rp1" className='img-flid' />
                            <h6>Mens Fashion Wear
                                <span>
                                    <Rate allowHalf defaultValue={2.5} />
                                </span>
                            </h6>
                            <h6>$43.00</h6>
                        </div>
                        <div className="col-md-3">
                            <img src={Rp2} alt="Rp2" className='img-flid' />
                            <h6>Women’s Fashion
                                <span>
                                    <Rate allowHalf defaultValue={2.5} />
                                </span>
                            </h6>
                            <h6>$43.00</h6>
                        </div>
                        <div className="col-md-3">
                            <img src={Rp3} alt="Rp3" className='img-flid' />
                            <h6>Wolx Dummy Fashion
                                <span>
                                    <Rate allowHalf defaultValue={2.5} />
                                </span>
                            </h6>
                            <h6>$43.00</h6>
                        </div>
                        <div className="col-md-3">
                            <img src={Rp4} alt="Rp4" className='img-flid' />
                            <h6>Top Wall Digital Clock
                                <span>
                                    <Rate allowHalf defaultValue={2.5} />
                                </span>
                            </h6>
                            <h6>$43.00</h6>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5"></div>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={img55} className='img-fluid' alt="img55" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5"></div>

        </>
    )
}
export default App

