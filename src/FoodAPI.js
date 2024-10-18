import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FoodCard from './FoodCard';
// import pic from "./images/food-banner.png"
export default function FoodAPI() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const YOUR_APP_ID = "d1adb527";
  const YOUR_APP_KEY = "fd8b9693f27978e90b3a63132addbeff";
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => setData(data.hits)
      )
  }
  return (
<<<<<<< HEAD
    <div className='row'>
      <div className='col-12'>
        <div className='d-flex justify-content-center'>
          <img className='food-pic img-fluid rounded-5 mt-2' src={pic} alt="Food Banner" />
        </div>
        <center>
          <h4 className='head'> Look for Your Food Receipe </h4>
          <form onSubmit={submitHandler}>
            <input type='text' className='mt-3 form-control p-5' placeholder='Search Food Recipie' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <br></br>
            <input type='submit' className='btn btn-success px-5 mt-3 rounded-5' value="Search"></input>
          </form>
=======
    <div>
       {/* <img className='food-pic' src={pic}></img> */}
      <center>
        <h3 className='mt-3 text-info'> Look for Your Food Receipe </h3>
        <form onSubmit={submitHandler}>
          <input type='text' className='mt-3' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
          <br></br>
          <input type='submit' className='btn btn-primary mt-3' value="Search"></input>
        </form>
>>>>>>> master

          {data.length > 1 ? <FoodCard data={data} /> : null}

        </center>
      </div>
    </div>
  )
}
