import sofa from '../../../Images/2.png'
import chair1 from '../../../Images/Untitled-2.png'
import chair2 from '../../../Images/Untitled-3.png'
import chair3 from '../../../Images/Untitled-4.png'
import chair4 from '../../../Images/6.png'
import dash from '../../../Images/7.png'
import chair5 from '../../../Images/chair-1.png'
import chair6 from '../../../Images/chair-2.png'
import chair7 from '../../../Images/chair-3.png'
import chair8 from '../../../Images/chair-4.png'
import chair9 from '../../../Images/chair-5.png'
import chair10 from '../../../Images/chair-6.png'
import card1 from '../../../Images/card1.png'
import card2 from '../../../Images/card2.png'
import card3 from '../../../Images/card3.png'
import card4 from '../../../Images/card4.png'

import '../../../App.css';
function App() {
  return (
    <>
      <div>
        <section>
          <div className="conatainer home-1">
            <div className="row align-items-center bg-image-1">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <h6 className='text-1'>Best Furniture For Your Castle....</h6>
                <h1 className='main-content-1'>New Furniture Collection
                  Trends in 2020</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                  in phasellus non in justo.</p>
                <button className='btn btn-danger main-content-1'>Shop Now</button>
              </div>
              <div className="col-md-4">
                <img src={sofa} className='img-fluid' alt="sofa" />
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container ">
            <div className="row align-items-center my-5">
              <h3 className='text-center main-content'>Featured Products</h3>
              <div className="col-md-2"></div>
              <div className="col-md-2 text-center align-items-normal">
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
              <div className="col-md-2 text-center align-items-normal">
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
              <div className="col-md-2 text-center align-items-normal">
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
              <div className="col-md-2 text-center align-items-normal">
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
              <div className="col-md-2"></div>
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
              <div className="col-md-2 "></div>
              <div className="col-md-3 ">
                <img src={chair5} className='img-fluid bg-1 p-5' alt="chair5" />
                <div className='d-flex justify-content-between main-content'>
                  <p>Comfort Handy Craft</p>
                  <p>$42.00</p>
                  <p className='text-1'><del>$65.00</del></p>
                </div>
              </div>
              <div className="col-md-3">
                <img src={chair6} className='img-fluid p-5' alt="chair6" />
                <div className='d-flex justify-content-between main-content'>
                  <p>Comfort Handy Craft</p>
                  <p>$42.00</p>
                  <p className='text-1'><del>$65.00</del></p>
                </div>
              </div>
              <div className="col-md-3 ">
                <img src={chair7} className='img-fluid bg-1 p-5' alt="chair7" />
                <div className='d-flex justify-content-between main-content'>
                  <p>Comfort Handy Craft</p>
                  <p>$42.00</p>
                  <p className='text-1'><del>$65.00</del></p>
                </div>
              </div>
              <div className="col-md-2 "></div>
              <div className="col-md-3 ">
                <img src={chair8} className='img-fluid bg-1 p-5' alt="chair8" />
                <div className='d-flex justify-content-between main-content'>
                  <p>Comfort Handy Craft</p>
                  <p>$42.00</p>
                  <p className='text-1'><del>$65.00</del></p>
                </div>
              </div>
              <div className="col-md-3 ">
                <img src={chair9} className='img-fluid bg-1 p-5' alt="chair9" />
                <div className='d-flex justify-content-between main-content'>
                  <p>Comfort Handy Craft</p>
                  <p>$42.00</p>
                  <p className='text-1'><del>$65.00</del></p>
                </div>
              </div>
              <div className="col-md-3 ">
                <img src={chair10} className='img-fluid bg-1 p-5' alt="chair10" />
                <div className='d-flex justify-content-between main-content'>
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
            <div className="row">
              <div className="col-md-12 text-center main-content mt-5">
                <h1>What Shopex Offer!</h1>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2 shadow p-4 text-center g-2">
                <img src={card1} className='img-fluid' alt="card1" />
                <h3>24/7 Support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className="col-md-2 shadow p-4 text-center g-2  ">
                <img src={card2} className='img-fluid' alt="card1" />
                <h3>24/7 Support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className="col-md-2 shadow p-4 text-center g-2  ">
                <img src={card3} className='img-fluid' alt="card1" />
                <h3>24/7 Support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className="col-md-2 shadow p-4 text-center g-2  ">
                <img src={card4} className='img-fluid' alt="card1" />
                <h3>24/7 Support</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default App
