import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import Data from './Login.json'
 
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const a = (e) => {
    e.preventDefault();
 
    const user = Data.find((user) => user.userid === username && user.password === password);
    if (user) {
      navigate('/')
    }
    else {
      alert("Invalid");
    }
  };
  return (
          <body className='login' >
 
        <div className='wrapper'>
          <form action='' onSubmit={a}>
            <h1 className='sa'>Login</h1>
            <div className='input-box'>
              <input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} className='s' />
 
            </div>
            <div className='input-box'>
              <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} className='s'/>
 
            </div>
           
            <button type='submit' id="button1" >Login</button>
 
            <div className='register-link'>
            <Link to='#'>Forget password</Link>
              <p>Don't have an account? <Link to='#'>Register</Link></p>
            </div>
          </form>
 
        </div>
 
      </body>
  )
}