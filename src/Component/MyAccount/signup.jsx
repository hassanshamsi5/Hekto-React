// import '../../App.css'
// import img55 from '../../Images/55.png'
// import { Link } from 'react-router-dom'
// import React, { useEffect, useState } from 'react';
// // import Password from 'antd/es/input/Password';

// function App() {
//     const [data, setData] = useState([]);
//     const [firstname, setFirstName] = useState("")
//     const [lastname, setlastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [forgetpass, setForgetpass] = useState("")
//     const [number, setNumber] = useState("")
//     const [error, setError] = useState("")

//     const loginHandler = ({ token, settoken }) => {
//         fetch({
//             url: ('https://fakestoreapi.com/users'),
//             method: "POST",
//             data: {
//                 username: firstname,
//                 password: password,
//             },
//         })
//             .then(res => {
//                 console.log(res.data.token);
//                 settoken(res.data.token)
//                 localStorage.setItem("usertoken", res.data.token)
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setError(err.response)
//             })
//     }
//     return (
//         <>
//             <section className='home'>
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-md-12 main-content mt-5">
//                             <h1>My Account</h1>
//                             <span>Home .</span>
//                             <span>Pages.</span>
//                             <span className="text-1">My Account</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <div className="container main-content ">
//                     <div className="row justify-content-center mt-5">
//                         <div className="col-md-4 text-center shadow p-5">
//                             <h4>Sign UP</h4>
//                             <p>Please login using account detail bellow.</p>
//                             <div className="form-group mt-5">
//                                 <input type="text" className="form-control" value={firstname} onChange={(e) => { setFirstName(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FirstName" />
//                             </div>
//                             <div className="form-group mt-5">
//                                 <input type="text" className="form-control" value={lastname} onChange={(e) => { setlastName(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="LastName" />
//                             </div>
//                             <div className="form-group mt-5">
//                                 <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
//                             </div>
//                             <div className="form-group mt-5">
//                                 <input type="Password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
//                             </div>
//                             <div className="form-group mt-5">
//                                 <input type="Password" className="form-control" value={forgetpass} onChange={(e) => { setForgetpass(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Repeat password" />
//                             </div>
//                             <div className="form-group mt-5">
//                                 <input type="number" className="form-control" value={number} onChange={(e) => { setNumber(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Number" />
//                             </div>
//                             {error && <small>{error}</small>}
//                             <button onClick={loginHandler} className='btntheme w-100 mt-3'>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>

//             </section>

//             <section>
//                 <div className="container">
//                     <div className="row mt-5">
//                         <div className="col-md-12 text-center">
//                             <img src={img55} className='img-fluid' alt="img55" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default App


import React, { useState } from 'react';
import '../../App.css';
import img55 from '../../Images/55.png';

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
                            
                            <button className="btntheme w-100 mt-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <img src={img55} className="img-fluid" alt="img55" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;

