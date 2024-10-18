import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FoodCard from './FoodCard';
import pic from "./images/food-banner.png";

export default function FoodAPI() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const YOUR_APP_ID = "d1adb527";
  const YOUR_APP_KEY = "fd8b9693f27978e90b3a63132addbeff";

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => setData(data.hits));
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='position-relative'>
          <img className='card-img img-fluid rounded-5 mt-2' src={pic} alt="Food Banner" />
          <h1 className='position-absolute top-50 start-50 translate-middle text-light text-center'>
            Look for Your Food Recipe
          </h1>
        </div>

        <form onSubmit={submitHandler}>
          <input
            type='text'
            className='mt-3 form-control p-5'
            placeholder='Search Your Food Recipe'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <input
            type='submit'
            className='btn btn-success px-5 mt-3 rounded-5'
            value="Search"
          />
        </form>

        {data.length > 0 ? <FoodCard data={data} /> : null}
      </div>
    </div>
  );
}
