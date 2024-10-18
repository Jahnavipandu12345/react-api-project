import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import React, { useState } from 'react'
import Products from "./Products"
import FoodAPI from "./FoodAPI"
import About from "./About"
import Home from "./Home"
import Services from "./Services";
import Movies from "./Movies.js";
// import Contact from "./Contact";
// // import Career from "./Career";
// import News from "./News";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

function App(){
 
  return(
    <>
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home">MRSJ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/home" className="Lk">HOME</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" className="Lk">ABOUT</Link>
        </li>
        <li class="nav-item">
        <Link to="/services" className="Lk">SERVICES</Link>
        </li>
        <li class="nav-item">
        <Link to="/BMI" className="Lk">BMI</Link>
        </li>
 
        <li class="nav-item">
        <Link to="/Contact" className="Lk">CONTACT US</Link>
        </li>
 
        <li className="nav-item dropdown">
      <Link to="/Contact" className="Lk   dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">API's</Link>
      <ul className="dropdown-menu">
            <li><a class="dropdown-item" href="/movies">MOVIES API</a></li>
            <li><a class="dropdown-item" href="/foodapi">FOOD API</a></li>
            <li><a class="dropdown-item" href="/Products">PRODUCT API</a></li>
           
          </ul>
      </li>
       
      </ul>
     
    </div>
  </div>
</nav>
 <div className="container-fluid">

 
<div className="row ">  
       <div className="col-lg-2 col-md-2 col-sm-12">
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/home" className="left-nav">Home</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/about" className="left-nav">About</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/services" className="left-nav">Services</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/bmi" className="left-nav">BMI</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/newsapi" className="left-nav">News API</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/foodapi" className="left-nav">Food API</a><br></br>
      </div>
      <div className="row"style={{marginTop:50,marginLeft:5}}>
      <a href="/Products" className="left-nav">Product API</a><br></br>
      </div>
      
  </div>
                  
    <div className="col-lg-10 col-md-10 col-sm-10">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/career" element={<Career/>}/> */}
      <Route path="/services" element={<Services/>}/>
      <Route path="/Products" element={<Products/>}/> 
      <Route path="/foodapi" element={<FoodAPI/>}/> 
      {/* <Route path="/Contact" element={<Contact/>}/> */}
      <Route path="/movies" element={<Movies/>}/>
    </Routes>
  </div>

</div>

 
   
     
 
     
   
    {/* .................................. */}
   
   
   
{/* .................... */}
      <div className="row" style={{marginTop:30}}>
      <div className="col-md-12">
      <p className="bg-dark text-light text-center p-3">CopyRight@gmail.com</p>
    </div>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}
export default App