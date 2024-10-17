import React from 'react'
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
// import pic1 from "./images/2women.jpg"
export default function About() {
  return (
    <>
      {/* <div className="container mt-3"> */}
          <div className="row mt-3">
            <div className="col-md-6">
                <h2 className="head-3">About Us</h2>
              <p className="para2">Established in 2005, MOURI Tech has evolved as a trusted global enterprise solution provider to its customers from various industries across the globe, helping them transform into intelligent enterprises.<br></br>
              We offer a wide range of IT services that cater to the digital needs of businesses of today and tomorrow. </p>
              <span className="span1">Employee First. Customer Foremost.</span><br></br>
              <button className="btn1"><Link to="/about"className="Lk1"> Know Me</Link></button>
            </div>

            <div className="col-md-6 mt-4">
              <img alt="" src="https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-260nw-2451544833.jpg"></img>
            </div>

          </div>

        {/* </div> */}
        {/* .............................. */}
        <h2 className='head-4'>Client Success Stories</h2>

       {/* <div className='container'> */}
        <div className='row'>
          <div className='col-md-4'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzfDUof_I9MrG5p1FCggifsHzaKXEVuGJBQ&s' alt='' className='pic2'></img>
<p className='text'>A Global Technology Provider Shift to API <br></br>based Microsoft Integration and Reduced Customer Response Time</p>
<a href=" " class="btn btn-primary  btn2">See More</a>
          </div>

          <div className='col-md-4'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzfDUof_I9MrG5p1FCggifsHzaKXEVuGJBQ&s' alt='' className='pic2'></img>
<p className='text'>A Global Technology Provider Shift to API <br></br>based Microsoft Integration and Reduced Customer Response Time</p>
<a href=" " class="btn btn-primary  btn2">See More</a>
          </div>

          <div className='col-md-4'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzfDUof_I9MrG5p1FCggifsHzaKXEVuGJBQ&s' alt='' className='pic2'></img>
<p className='text'>A Global Technology Provider Shift to API <br></br>based Microsoft Integration and Reduced Customer Response Time</p>
<a href=" " class="btn btn-primary btn2">See More</a>
          </div>

        </div>

       {/* </div> */}
    </>
  )
}
