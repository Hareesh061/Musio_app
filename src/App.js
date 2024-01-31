import './App.css';
import { useState } from 'react';

function App() {
  const [albums,setTracks] = useState([])

  const getTracks = async() =>{
    let data = await fetch("https://v1.nocodeapi.com/harry019/spotify/cOHqTEjyYXbOrdMS/search?q=<q>");
    let convertedData = await data.json();
    console.log(convertedData.albums.items);
    setTracks(convertedData.albums.items);
  };

  return <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Musio.co
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <input
        className="form-control mr-2 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success " type="submit">
        Search
      </button>
  
  </div>
</nav>
<div className="col">
      <button onClick={getTracks} className="btn btn-primary ">get data</button>
    </div>
 <div className="container">
  <div className="row">
   
   {
    albums.map((element) => {
      return (
      <div key={element.id} className="col">

        <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={element.images[0].url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist:  {element.artists[0].name}
    </p>
    <audio src={element.external_urls }  controls className="w-100"></audio>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

        </div>
      );
    })
   }

  </div>
 </div>
  </>
  
}

export default App;
