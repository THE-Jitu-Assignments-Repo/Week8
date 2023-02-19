import React, { useState } from 'react'
import { FaRegistered, FaRegUserCircle, FaUserEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/auth/userSlice';

import "../login/login.css"


function Register() {
      const navigate = useNavigate();
// use state constants for the the form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

    // A quick check on the name field to make it mandatory
  const register = () => {
    if (!name || !email || !password) {
      return alert('Please enter a full details of your account');
    }
    dispatch(registerUser({username: name, email, password}))
    navigate('/login')
  };

  return (
  <div className='login'>
      <div className='login--form--container' >
        <FaUserEdit size={40} style={{width: '100%'}}/>
          <h2>Register to E-market</h2>
        <form className='login--form'>
          <label htmlFor="name">username</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required for registering)'
            type='text'
          />
          <label htmlFor="Profile">Profile *URL</label>
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
          />
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
            placeholder='Enter password'
            type='password'
          />
          <button type='submit' className='sign--in' onClick={register}>
            Register
          </button>
        </form>
          <p>
          You have an account?{' '}
          <Link to='/login' ><span className='login__register'>
            Login
          </span> </Link>
          
        </p>
      </div>
    </div>
  )
}

export default Register