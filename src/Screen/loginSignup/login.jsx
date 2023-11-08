// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function Login({token,setToken}) {
//   const navigator = useNavigate()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState(''); 

//   const handleLogin = () => {
//     // fetch('https://fakestoreapi.com/users')
//     fetch('https://fakestoreapi.com/auth/login')
//       .then((res) => res.json())
//       .then((users) => {
//         const user = users.find((u) => u.email === email);
      
//         if (user) {
//           if (user.password === password) {
//             console.log('Login successful');
//             alert('Login successful');
//             navigator('/');
//             setToken(user)
//             console.log(user);
//             localStorage.setItem("userToken",user.token)
//           } else {
//             console.log('Incorrect password');
//             alert('Incorrect password');
//           }
//         } else {
//           console.log('User not found');
//           alert('User not found');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <>
//         <div className="container main-content ">
//           <div className="row justify-content-center mt-5">
//             <div className="col-md-4 text-center shadow p-5">
//               <h4>Login</h4>
//               <p>Please login using account detail bellow.</p>
//               <>
//                 <div className="form-group mt-5">
//                   <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//                 </div>
//                 <div className="form-group mt-5">
//                   <input type="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//                 </div>
//                 <button onClick={handleLogin} className='btntheme w-100 mt-5'>Sign In</button>
//                 <p className='mt-3'>Don’t have an Account? <Link to="/Signup">Create account</Link></p>
//               </>
//             </div>
//           </div>
//         </div>

//       </>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setToken }) {
  const navigator = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email, // Assuming the username is the same as the email
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) {
            console.log('Authentication failed: Incorrect email or password');
            alert('Authentication failed: Incorrect email or password');
          } else {
            console.error(`Network response was not ok. Status: ${res.status}`);
            alert('An error occurred while logging in.');
          }
          throw new Error('Authentication error');
        }
        return res.json();
      })
      .then((user) => {
        if (user.token) {
          console.log('Login successful');
          alert('Login successful');
          setToken(user.token);
          localStorage.setItem('userToken', user.token);
          navigator('/'); 
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div>
      <div className="container main-content">
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 text-center shadow p-5">
            <h4>Login</h4>
            <p>Please login using account details below.</p>
            <div>
              <div className="form-group mt-5">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-5">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button onClick={handleLogin} className="btntheme w-100 mt-5">
                Sign In
              </button>
              <p className="mt-3">
                Don’t have an Account? <Link to="/Signup">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
