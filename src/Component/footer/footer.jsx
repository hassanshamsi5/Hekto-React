import '../../App.css';
import fb from '../../Images/fb.png'
import insta from '../../Images/insta.png'
import twitter from '../../Images/twitter.png'

function App() {
    return (
        <>
            <section className='bg-0 mt-5'>
                <div className="container ">
                    <footer className="py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mb-3">
                                <div>
                                    <h2 className='fw-bold'>Hekto</h2>
                                    <div className="d-flex flex-column flex-sm-row w-75">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="text" className="form-control w-50" placeholder="Enter Email Address   " />
                                        <button className="btntheme" type="button">Sign Up</button>
                                    </div>
                                    <p>Contact Info</p>
                                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Catagories</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Laptops & Computers</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Cameras & Photography</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Smart Phones & Tablets</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Video Games & Consoles</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Waterproof Headphones</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5>Customer Care</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">My Account</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Discount</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Returns</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Orders History</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Order Tracking</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-2 mb-3">
                                <h5>Pages</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Blog</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Browse the Shop</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Category</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Pre-Built Pages</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Visual Composer Elements</a></li>
                                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">WooCommerce Pages</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row justify-content-between  border-top">
                            <p>©Webecy - All Rights Reserved</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><img src={fb} className='img-fluid' alt="fb" /></li>
                                <li className="ms-3"><img src={insta} className='img-fluid' alt="insta" /></li>
                                <li className="ms-3"><img src={twitter} className='img-fluid' alt="twitter" /></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}
export default App