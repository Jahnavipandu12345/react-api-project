import React, { useState, useEffect } from 'react';
export default function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://serpapi.com/search.json?engine=google_news&gl=us&hl=en&topic_token=CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
 
    fetchData();
  }, []);
 
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
 
  return (
    <div className='container'>
      <h1>Top Business Headlines</h1>
      <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} className="form-control mb-3" />
      <div className='row'>
        {articles
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.title} className='col-md-4 mb-4'>
              <div className="card">
                {item.urlToImage && <img src={item.urlToImage} className="card-img-top" alt={item.title} />}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
 