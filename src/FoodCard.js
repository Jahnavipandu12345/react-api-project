import React from 'react';

export default function FoodCard({ data }) {
  return (
   
      <div className="row mt-5 ">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-6 col-xl-4 col-xxl-4 mb-2">
            <div className="card food">
              <img
                className="card-img-top box-img"
                src={item.recipe.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">
                    Total Amount of Calories: {Math.round(item.recipe.calories)}
                  </p>
                  <a href="#" className="btn btn-primary">Buy</a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}
