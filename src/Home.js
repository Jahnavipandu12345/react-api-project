import React from 'react'
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h2 className="head-2">MOURI Tech - A Trusted Partner Helping Customers Succeed</h2>
        <img alt="" src="https://www.freewebheaders.com/wp-content/gallery/office-finance/cache/business-professionals-shaking-hands-web-header.jpg-nggid044145-ngg0dyn-1280x375x100-00f0w010c010r110f110r010t010.jpg" className="pic"></img>
        <p className="para1">MOURI Tech specializes in technology innovation and digital solutions development. With technology consulting expertise and industry experience that is second to none, MOURI Tech is always at the forefront of 
          helping customers redefine their digital strategies and accelerate their business transformation journey.</p>
          {/* .................... */}
        {/* <div className="container"> */}
          <div className="row">
            <div className="col-md-6">
                <h2 className="head-3">About Us</h2>
              <p className="para2">Established in 2005, MOURI Tech has evolved as a trusted global enterprise solution provider to its customers from various industries across the globe, helping them transform into intelligent enterprises.<br></br>
              We offer a wide range of IT services that cater to the digital needs of businesses of today and tomorrow. </p>
              <span className="span1">Employee First. Customer Foremost.</span><br></br>
              <button className="btn1"><Link to="/about"className="Lk1"> Know Me</Link></button>
            </div>

            <div className="col-md-6">
              <img alt="" src="https://www.ramsac.com/wp-content/picasso/2021/12/teams-meeting-ramssac-blog-650x366.webp" className="pic"></img>
            </div>

          </div>

        {/* </div> */}
    </>
  )
}
