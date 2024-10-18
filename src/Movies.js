import React,{useState} from 'react'

export default function Movies() {
    const [search,setSearch]=useState("");
    const [data,setData]=useState([])
    const submitHandler=e=>{
        e.preventDefault();
        // console.log(search); //write search in box:game of thrones,Star Wars
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
            response=>response.json()
        ).then(value=>setData(value.Search))
    }
  return (
    <div>
      <center>
        <h3 className='mt-3 text-info'>Search Your Favourite Movies </h3>
        <form onSubmit={submitHandler}>
            <input type='text' className='mt-3' value={search} onChange={(e)=>setSearch(e.target.value)}/><br></br>
            <input type='submit' className='mt-3 btn btn-primary mb-3' value="Search"/>
            </form>
            <div className='row'>
            {data.map(movie=>
                // .....bootstrap card ....
               <div className='col-md-4'> 
                <div className="card" style={{"width":"18rem;"}}>
  <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h4 className='card-title'>{movie.Title}</h4>
    <a href={movie.Poster} className='btn btn-primary' download>Download Poster</a>
    {/*  href lo.....url echam kabatti images vastundi */}
  </div>
</div>
</div>
            )}
       </div>
      </center>
    </div>
  )
}
