import React from 'react'

export default function FoodCard({data}) {
  return (
    <div>
        <div  className='row'>
            {data.map(data=>
      <div className="card food" style={{"width": "300px","height":"400px","margin-left":"20px","margin-top":"30px"}}>
  <img className="card-img-top box-img" src={data.recipe.image}  alt="Card image cap" style={{"width": "100%","margin-top":"10px"}}/>

  <div className="card-body">
    <center>
    <h5 className="card-title">{data.recipe.label}</h5>
    <p className="card-text">Total Amount of Calories :{Math.round(data.recipe.calories)}</p>
    <a href="#" className="btn btn-primary">Buy</a>
    
    </center>
  </div>
</div>
 )} 
     </div>
    </div>
              
  )
}



