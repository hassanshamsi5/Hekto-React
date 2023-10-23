import '../../App.css'
import contactus from '../../Images/contactus.png'

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>Contact Us</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="container main-content mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className='mb-5'>Information About us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="25" viewBox="0 0 103 25" fill="none">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#5625DF" />
                                <circle cx="51.5" cy="12.5" r="12.5" fill="#FF27B7" />
                                <circle cx="90.5" cy="12.5" r="12.5" fill="#37DAF3" />
                            </svg>
                            <div className="py-5"></div>
                            <section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.46389069669!2d67.08082957535038!3d24.882153544389176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eb5cd03b92b%3A0xae6a9089183bced0!2sDigiTrends!5e0!3m2!1sen!2s!4v1697642538250!5m2!1sen!2s"
                                                width="600" height="450" style={{ border: 0 }} allowfullscreen
                                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <h4>Get In Touch</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Your Name*" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Your E-mail" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-3" placeholder="Subject*" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type Your Messege*'></textarea>
                                    </div>

                                </div>
                            </form>
                            <button className='btntheme mt-3'>Send Mail</button>
                        </div>
                        <div className="col-md-6">
                            <h5>Contact Way</h5>
                            <div className="row">
                                <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                        <circle cx="22.5" cy="22.5" r="22.5" fill="#5726DF" />
                                    </svg>
                                </div>
                                <div className="col-md-4">
                                    <p>Tel: 877-67-88-99</p>
                                    <p>E-Mail: shop@store.com</p>
                                </div>
                                <div className="col-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                        <circle cx="22.5" cy="22.5" r="22.5" fill="#FB2E86" />
                                    </svg>
                                </div>
                                <div className="col-md-4">
                                    <p>Support Forum</p>
                                    <p>For over 24hr</p>
                                </div>
                                <div className="row g-3">

                                    <div className="col-md-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                            <circle cx="22.5" cy="22.5" r="22.5" fill="#FFB265" />
                                        </svg>
                                    </div>
                                    <div className="col-md-4">
                                        <p>20 Margaret st, London</p>
                                        <p>Great britain, 3NM98-LK</p>
                                    </div>
                                    <div className="col-md-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                            <circle cx="22.5" cy="22.5" r="22.5" fill="#1BE982" />
                                        </svg>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Free standard shipping</p>
                                        <p>on all orders.</p>
                                    </div>
                                </div>
                            </div>

                            <img src={contactus} className='img-fluid' alt="contactus" />

                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
        </>
    )
}
export default App

