import { Toast } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
const usenavigate=useNavigate();

useEffect(()=>{
sessionStorage.clear();
},[]);
    const ProceedLogin=(e)=>{
        e.preventDefault()
        if(validate()){
// implementation
// console.log("proceed");
fetch("http://localhost:3000/user/"+username)
.then((res)=>{
  return res.json();
}).then((resp)=>{
  console.log(resp)
  if(Object.keys(resp).length===0){
    Toast.error("Please Enter Valid username");
  }else{
    if(resp.password===password){
      Toast.success("Success")
      sessionStorage.setItem("username",username);
usenavigate("/")
    }else{
      Toast.error("Please Enter Valid credetials");
    }
  }
}).catch((err)=>{
  Toast.error("Login Failed due to:"+err.message);
})
        }
    }
    const validate=()=>{
      let result=true;
      if(username===""|| username===null){
        result=false;
      Toast.warning("Please Enter user")
      }
      if(password===""|| password===null){
        result=false;
      Toast.warning("Please Enter password")
      }
      return result;
    }
  return (
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'style={{marginTop:"100px"}}>
            <form onSubmit={ProceedLogin}className='container'>
                <div className='card'>
                    <div className='card-header'>
                          <h2> User Login</h2>
                          </div>
                          <div className='card-body'>
                            <div className='form-group'>
                                <label>User Name <span className='errormsg'>*</span></label>
                                <input type='text' value={username} onChange={e=>setUsername(e.target.value)}  className='form-control'></input>
                                </div>
                                <div className='form-group'>
                                <label>Password <span className='errormsg'>*</span></label>
                                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} className='form-control'></input>
                                </div>

                          </div>
                          <div className='card-footer'>
                           <button type='submit' className='btn btn-primary'>Login</button>
                           <Link className="btn btn-success" to={'/register'}>New User</Link>
                          </div>
                </div>

            </form>

        </div>
      
    </div>
  )
}
