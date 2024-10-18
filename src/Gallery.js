import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
export default function Gallery() {
  return (
    <>
{/* <div class="container-fluid"> */}
    <div class="row">
      <div class=" col-12 col-md-12 col-lg-12">
        <h1 className='text-center mt-2'>Gallery</h1>
      </div>
    </div>
    {/* <!-- ........................... row1................................ --> */}
    <div class="row mt-3">
      <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
        <div class="card">
          <img  alt="" src="https://www.mouritech.com/wp-content/uploads/2023/08/Hyderabad-office-1.jpg" class="card-img-top"/>
        </div>
      </div>

       <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
        <div class="card">
          <img  alt=" " src="https://cdn.contemporaryartlibrary.org/store/image/163635/imagefile/caq_thumb-840e86f7461ebe7737bc10acc19f8345.jpg" class="card-img-top"/>
        </div>
       </div>
   

       <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
        <div class="card">
          <img alt='' src="https://floodlightz.com/wp-content/uploads/2024/02/event-promoters-lucknow-3a.jpg" class="card-img-top"/>
        </div>
       </div>
    </div>
    {/* <!-- ..............row 2................ --> */}
    <div class="row mt-3">
        <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
          <div class="card">
            <img alt='' src="https://www.mobipayservices.com/Web/images/certificate/gallery/7.jpg" class="card-img-top"/>
          </div>
        </div>
  
         <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
          <div class="card">
            <img alt='' src="https://www.mobipayservices.com/Web/images/certificate/gallery/2.jpg" class="card-img-top"/>
          </div>
         </div>
     
  
         <div class="col-12 col-md-4 col-lg-4 mt-2 mb-2">
          <div class="card">
            <img alt='' src="https://www.mobipayservices.com/Web/images/certificate/gallery/1.jpg" class="card-img-top"/>
          </div>
         </div>
      </div>
      {/* </div> */}
    </>
  )
}
