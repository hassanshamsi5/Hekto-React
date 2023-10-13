import sofa from '../../Images/2.png'
import chair1 from '../../Images/Untitled-2.png'
import chair2 from '../../Images/Untitled-3.png'
import chair3 from '../../Images/Untitled-4.png'
import chair4 from '../../Images/6.png'
import dash from '../../Images/7.png'
import chair5 from '../../Images/chair-1.png'
import chair6 from '../../Images/chair-2.png'
import chair7 from '../../Images/chair-3.png'
import chair8 from '../../Images/chair-4.png'
import chair9 from '../../Images/chair-5.png'
import chair10 from '../../Images/chair-6.png'
import card1 from '../../Images/card1.png'
import card2 from '../../Images/card2.png'
import card3 from '../../Images/card3.png'
import card4 from '../../Images/card4.png'
import unifeat from '../../Images/Group 153.png'
import card5 from '../../Images/15.png'
import card6 from '../../Images/16.png'
import card7 from '../../Images/new.png'
import card8 from '../../Images/new-2.png'
import card9 from '../../Images/new-3.png'
import card10 from '../../Images/card10.png'
import card11 from '../../Images/card11.png'
import card12 from '../../Images/card12.png'
import DiscountItem from '../../Images/Group 154.png'
import img55 from '../../Images/55.png'
import banner1 from '../../Images/first-banner.png'
import banner2 from '../../Images/second-banner.png'
import banner3 from '../../Images/third-banner.png'

// import b1 from '../../Images/1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../App.css';

function App() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* <div className="col-md-3 col-3">
              <img src={b1} className='img-fluid' alt="b1" />
            </div>
            <div className="col-md-4 col-7">
              <h6 className='text-1'>Best Furniture For Your Castle....</h6>
              <h1 className='main-content-1'>New Furniture Collection
                Trends in 2020</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
              <button className='btn btn-danger main-content-1'>Shop Now</button>
            </div>
            <div className="col-md-4 col-8">
              <img src={sofa} className='img-fluid' alt="sofa" />
            </div> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={banner1} alt="Discount Item" className='img-fluid ' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner2} alt="Discount Item" className='img-fluid ' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={banner3} alt="Discount Item" className='img-fluid ' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      <section>
        <div className="container ">
          <div className="row align-items-center my-5">
            <h3 className='text-center main-content'>Featured Products</h3>
            <div className="col-md-3  text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair1} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      <img src={dash} alt="dash" /></div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair2} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      <img src={dash} alt="dash" /></div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair3} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      <img src={dash} alt="dash" /></div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair4} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      <img src={dash} alt="dash" /></div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='main-content text-center my-4'>Leatest Products</h1>
              <div className="text-center main-content my-4">
                <span className='mx-3 hov-1'>New Arrival</span>
                <span className='mx-3 hov-1'>Best Seller</span>
                <span className='mx-3 hov-1'>Featured</span>
                <span className='mx-3 hov-1'>Special Offer</span>
              </div>
            </div>

            <div className="col-md-4 ">
              <img src={chair5} className='img-fluid bg-1 p-5' alt="chair5" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={chair6} className='img-fluid p-5' alt="chair6" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>
            <div className="col-md-4 ">
              <img src={chair7} className='img-fluid bg-1 p-5' alt="chair7" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>

            <div className="col-md-4 ">
              <img src={chair8} className='img-fluid bg-1 p-5' alt="chair8" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>
            <div className="col-md-4 ">
              <img src={chair9} className='img-fluid bg-1 p-5' alt="chair9" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>
            <div className="col-md-4 ">
              <img src={chair10} className='img-fluid bg-1 p-5' alt="chair10" />
              <div className='d-flex  main-content'>
                <p>Comfort Handy Craft</p>
                <p>$42.00</p>
                <p className='text-1'><del>$65.00</del></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 text-center main-content mt-5">
              <h1>What Shopex Offer!</h1>
            </div>
            <div className="col-md-3 shaqwdow p-4 text-center g-2">
              <img src={card1} className='img-fluid' alt="card1" />
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="col-md-3 shaqwdow p-4 text-center g-2">
              <img src={card2} className='img-fluid' alt="card1" />
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="col-md-3 shaqwdow p-4 text-center g-2">
              <img src={card3} className='img-fluid' alt="card1" />
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="col-md-3 shaqwdow p-4 text-center g-2">
              <img src={card4} className='img-fluid' alt="card1" />
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

          </div>
        </div>
      </section>
      <section className='bg-2'>
        <div className="container-fluid">
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <img src={unifeat} className='img-fluid' alt="unifeat" />
            </div>
            <div className="col-md-6">
              <h1 className='main-content'>Unique Features Of leatest &
                Trending Poducts</h1>
              <ul>
                <li className='cal-0'>All frames constructed with hardwood solids and laminates</li>
                <li className='cal-1'>Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails</li>
                <li className='cal-2'>Arms, backs and seats are structurally reinforced</li>
              </ul>
              <button className='btntheme'>Add To Cart</button>
              <span className='mx-4 main-content'>B&B Italian Sofa $32.00</span>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container ">
          <div className="row align-items-center mt-5">
            <h2 className='text-center main-content fw-bold '>Trending Products</h2>
            <div className="col-md-3 text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair1} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      {/* <img src={dash} alt="dash" /> */}
                    </div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair2} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      {/* <img src={dash} alt="dash" /> */}
                    </div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair3} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      {/* <img src={dash} alt="dash" /> */}
                    </div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center align-items-normal">
              <div className="shadow border-0">
                <img src={chair4} className='img-fluid bg-1 p-2' alt="chair1" />
                <div className='hov p-1'>
                  <h6 className='text-1'>Cantilever chair</h6>
                  <div className="row">
                    <div className="col-12 text-center">
                      {/* <img src={dash} alt="dash" /> */}
                    </div>
                  </div>
                  <h6 className=''>Code - Y523201</h6>
                  <h6 className=''>$42.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container main-content">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4 bg-3 ">
              <h5>23% off in all products</h5>
              <a href="/">Shop Now</a>
              <img src={card5} className='img-fluid' alt="card5" />
            </div>
            <div className="col-md-4 bg-2">
              <h5>23% off in all products</h5>
              <a href="/">View Collection</a>
              <img src={card6} className='img-fluid' alt="card6" />
            </div>
            <div className="col-md-4">
              <div className="row align-items-center g-3">
                <div className="col-md-6 col-6">
                  <img src={card9} className='img-fluid bg-1' alt="card7" />
                </div>
                <div className="col-md-6 col-6  mb-2">
                  Executive Seat chair <del>$32.00</del>
                </div>
                <div className="col-md-6 col-6">
                  <img src={card7} className='img-fluid bg-1' alt="card7" />
                </div>
                <div className="col-md-6 col-6">
                  Executive Seat chair <del>$32.00</del>
                </div>  <div className="col-md-6 col-6">
                  <img src={card8} className='img-fluid bg-1' alt="card7" />
                </div>
                <div className="col-md-6 col-6">
                  Executive Seat chair <del>$32.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1 className='main-content text-center mt-5'>Discount Item</h1>
            <div className="text-center main-content my-4">
              <span className='mx-3 hov-1'>Wood Chair</span>
              <span className='mx-3 hov-1'>Plastic Chair</span>
              <span className='mx-3 hov-1'>Sofa Colletion</span>
            </div>
            <div className="col-md-6">
              <h1 className='main-content'>20% Discount Of All Products</h1>
              <h3 className='text-1'>Eams Sofa Compact</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
              <div className="row">
                <div className="col-md-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className='text-4'>Material expose like metals</span>
                </div>
                <div className="col-md-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className='text-4'>Clear lines and geomatric figures</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className='text-4'>Simple neutral colours.</span>
                </div>
                <div className="col-md-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                  <span className='text-4'>Material expose like metals</span>
                </div>
              </div>
              <button className='btntheme'>Shop Now</button>
            </div>

            <div className="col-md-6">
              <img src={DiscountItem} alt="Discount Item" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container main-content">
          <div className="row">
            <h1 className='main-content text-center'>Top Categories</h1>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}

              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src={chair1} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair2} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair3} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair4} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair1} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair2} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair3} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide><img src={chair4} alt="Discount Item" className='img-fluid bg-6 p-5' />
                <div className="row">
                  <div className="col-md-9">
                    <h5 className='text-center'>Mini LCW Chair</h5>
                    <p className='text-center'>$56.00</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      <section className='bg-7'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center ">
              <h1 className='main-content '>Get Leatest Update By Subscribe</h1>
              <h1 className='main-content '>0ur Newslater</h1>
              <button className='btntheme '>Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <img src={img55} className='img-fluid' alt="img55" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <h1 className='text-center main-content mt-5 mb-5'>Leatest Blog</h1>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card10} className="card-img-top" alt="card10" />
                <div className="card-body">
                  <h5 className="card-title main-content">Saber Ali</h5>
                  <h5 className='main-content'>Top esssential Trends in 2021</h5>
                  <p className="card-text">
                    More off this less hello samlande lied much
                    over tightly circa horse taped mightly.
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="card-link">
                    Read More
                  </a>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card11} className="card-img-top" alt="card11" />
                <div className="card-body">
                  <h5 className="card-title">Saber Ali</h5>
                  <h5 className='text-1'>Top esssential Trends in 2021</h5>
                  <p className="card-text">
                    More off this less hello samlande lied much
                    over tightly circa horse taped mightly.
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="card-link text-1">
                    Read More
                  </a>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={card12} className="card-img-top" alt="card12" />
                <div className="card-body">
                  <h5 className="card-title main-content">Saber Ali</h5>
                  <h5 className='main-content'>Top esssential Trends in 2021</h5>
                  <p className="card-text">
                    More off this less hello samlande lied much
                    over tightly circa horse taped mightly.
                  </p>
                </div>
                <div className="card-body">
                  <a href="/" className="card-link">
                    Read More
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
export default App


