import '../../App.css';
import fb from '../../Images/fb.png'
import insta from '../../Images/insta.png'
import twitter from '../../Images/twitter.png'

function App() {
    return (
        <>
            <div class="container-fluid bg-0">
                <footer class="py-5">
                    <div class="row justify-content-center">
                        <div class="col-md-4 offset-md-1 mb-3">
                            <div>
                                <h4>Hekto</h4>
                                <div class="d-flex flex-column flex-sm-row w-75">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Enter Email Address   " />
                                    <button class="btntheme" type="button">Sign Up</button>
                                </div>
                                <p>Contact Info</p>
                                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Catagories</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Laptops & Computers</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Cameras & Photography</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Smart Phones & Tablets</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Video Games & Consoles</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Waterproof Headphones</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Customer Care</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">My Account</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Discount</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Returns</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Orders History</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Order Tracking</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-md-2 mb-3">
                            <h5>Pages</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Blog</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Browse the Shop</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Category</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Pre-Built Pages</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">Visual Composer Elements</a></li>
                                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 ">WooCommerce Pages</a></li>

                            </ul>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between  border-top">
                        <p>©Webecy - All Rights Reserved</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><img src={fb} className='img-fluid' alt="fb" /></li>
                            <li class="ms-3"><img src={insta} className='img-fluid' alt="insta" /></li>
                            <li class="ms-3"><img src={twitter} className='img-fluid' alt="twitter" /></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default App