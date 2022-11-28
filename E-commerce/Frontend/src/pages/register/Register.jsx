import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    if (!name) {
      return alert('Please enter a full name');
    }
    dispatch(registerUser({username: name, email, password}))
  };

  return (
  <div className='login'>
      <div className='login--form--container' >
          <h2>Register to E-market</h2>
        <form className='login--form'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required for registering)'
            type='text'
          />

          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder='Profile picture URL (optional)'
            type='text'
          />
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
          <button type='submit' className='sign--in' onClick={register}>
            Register Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register