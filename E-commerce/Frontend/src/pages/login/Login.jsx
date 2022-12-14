import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth/userSlice';
import './login.css'

function Login() {

  const navigate = useNavigate();
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const loginToApp = () => {      
      dispatch(loginUser({email,password}))
      navigate('/products')     

  };


  return (
    <div className='login'>
      <div className='login--form--container' >
          <h2>Login to E-market</h2>
        <form className='login--form'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
          />
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
          />
          <button type='submit' className='sign--in' onClick={loginToApp}>
            Sign In
          </button>
        </form>

        <p>
          Not a member?{' '}
          <Link to={'register'} ><span className='login__register'>
            Register Now
          </span> </Link>
          
        </p>
      </div>
    </div>
  );
}

export default Login;