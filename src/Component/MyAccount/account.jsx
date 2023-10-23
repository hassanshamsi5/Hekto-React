import React, { useState } from 'react';
import '../../App.css';
import img55 from '../../Images/55.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const loginHandler = () => {
        setError('');
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Invalid credentials');
                }
            })
            .then((data) => {
                console.log('Login successful', data);
                navigate('/');

            })
            .catch((err) => {
                console.error('Login error:', err.message);
                setError(err.message);
            });
    };

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
                            <div className="form-group mt-5">
                                <input type="email" className="form-control" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="User Name" />
                            </div>
                            <div className="form-group mt-5">
                                <input type="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            {/* <div className="form-group mt-5">
                                 <input type="Password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Forgot your password?" />
                             </div> */}
                            {error && <small className="text-danger">{error}</small>}
                            <button onClick={loginHandler} className='btntheme w-100 mt-5'>Sign In</button>
                            <p className='mt-3'>Don’t have an Account? <Link to="/Signup">Create account</Link></p>

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
    );
};

export default Login;

