import React, { useState } from 'react';
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
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/');

            })
            .catch((err) => {
                console.error('Login error:', err.message);
                setError(err.message);
            });
    };

    return (
        <>
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
                            <button onClick={loginHandler} className=' btn btn-primary  w-100 mt-5'>Sign In</button>
                            <p className='mt-3'>Don’t have an Account? <Link to="/Signup">Create account</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

