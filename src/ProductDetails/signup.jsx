import React, { useState } from 'react';
// import '../../App.css';
// import img55 from '../../Images/55.png';

function App() {
    return (
        <>
          
            <section>
                <div className="container main-content">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4 text-center shadow p-5">
                            <h4>Sign Up</h4>
                            <p>Please sign up using your account details below.</p>
                            <div className="form-group mt-5">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" className="form-control"  placeholder="Last Name" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="email" className="form-control"  placeholder="Email Address" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="password" className="form-control"  placeholder="Password" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="password" className="form-control" placeholder="Repeat Password" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                            
                            <button className="btn btn-primary  w-100 mt-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            {/* <img src={img55} className="img-fluid" alt="img55" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;

