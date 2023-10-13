import '../../App.css'
import img55 from '../../Images/55.png'

function App() {

    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 main-content mt-5">
                            <h1>My Account</h1>
                            <span>Home .</span>
                            <span>Pages.</span>
                            <span className="text-1">My Account</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container main-content ">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 text-center shadow p-5">
                            <h4>Login</h4>
                            <p>Please login using account detail bellow.</p>
                            <div class="form-group mt-5">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                            </div>
                            <div class="form-group mt-5">
                                <input type="Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                            </div>
                            <div class="form-group mt-5">
                                <input type="Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Forgot your password?" />
                            </div>
                            <button className='btntheme w-100 mt-3'>Sign In</button>
                            <p className='mt-3'>Don’t have an Account?Create account</p>
                            
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
        </>
    )
}
export default App

