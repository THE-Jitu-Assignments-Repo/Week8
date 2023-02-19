import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth/userSlice';
import './login.css'
import { FaRegStar, FaRegUserCircle, FaUserEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Login() {
  const {error} = useSelector(state=>state.user) 

  const navigate = useNavigate();
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('')

  const dispatch = useDispatch();


  const loginToApp = () => {   
    if(error){
      setErr(error)
    }   
      dispatch(loginUser({email,password}))
      navigate('/products')     

  };


  return (
    <div className='login'>
      <div className='login--form--container' >
        <FaRegUserCircle size={40} style={{display: 'flex', width: '100%', marginBottom: '10px'}}/>
          <h2>Login to E-market</h2>
          {err && <div>{err}</div>}
        <form className='login--form'>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='...@gmail.com'
            type='email'
          />
          <label htmlFor="password">Password</label>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='enter password'
            type='password'
          />
          <button type='submit' className='sign--in' onClick={loginToApp}>
            Sign In
          </button>
        </form>

        <p>
          You don't have an account?{' '}
          <Link to={'register'} ><span className='login__register'>
            Register
          </span> </Link>
          
        </p>
      </div>
    </div>
  );
}

export default Login;