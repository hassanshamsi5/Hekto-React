import '../../App.css'
import Aboutus from '../../Images/aboutus.png'
import card1 from '../../Images/card1.png'
import card2 from '../../Images/card2.png'
import card3 from '../../Images/card3.png'
import card4 from '../../Images/card4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import client from '../../Images/client.png'
import { useProductContext } from '../../Context/productcontext'

const App = () => {
    const { myName } = useProductContext()

    return (
        <>
           <h1>{myName}</h1>
            <section className='home'>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>About Us</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">About Us</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content">
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-6">
                            <img src={Aboutus} className='img-fluid' alt="Aboutus" />
                        </div>
                        <div className="col-md-6">
                            <h1>Know About Our Ecomerce
                                Business, History</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                            <button className='btntheme'>Contact us</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row g-5 mt-5">
                        <div className="col-md-12 text-center main-content mt-5">
                            <h1>Our Features</h1>
                        </div>
                        <div className="col-md-3 shadow p-4 text-center g-2">
                            <img src={card1} className='img-fluid' alt="card1" />
                            <h3>Free Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="col-md-3 shadow p-4 text-center g-2">
                            <img src={card2} className='img-fluid' alt="card1" />
                            <h3>100% Cash Back</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="col-md-3 shadow p-4 text-center g-2">
                            <img src={card3} className='img-fluid' alt="card1" />
                            <h3>Quality Product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="col-md-3 shadow p-4 text-center g-2">
                            <img src={card4} className='img-fluid' alt="card1" />
                            <h3>24/7 Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5"></div>

            <section className='bg-21 p-4'>
                <div className="container main-content text-center mt-5">
                    <div className="row align-items-center">
                        <h1 className='main-content text-center'>Our Client Say!</h1>
                        <div className="col-md-12">
                            <div className="row align-items-center">
                                <div className="col-md-3"></div>
                                <div className="col-md-1"></div>
                                <div className="col-md-4 mt-5">
                                    <img src={client} className='img-fluid' alt="client" />
                                </div>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}

                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <h5 className='text-center'>Selina Gomez</h5>
                                        <p>Ceo At Webecy Digital</p>
                                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <h5 className='text-center'>Selina Gomez</h5>
                                        <p>Ceo At Webecy Digital</p>
                                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <h5 className='text-center'>Selina Gomez</h5>
                                        <p>Ceo At Webecy Digital</p>
                                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='p-5'></section>
            {" "}
        </>
    )
}
export default App

