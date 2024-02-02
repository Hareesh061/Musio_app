import './App.css';
import { useState } from 'react';

function App() {
  const   [keyword, setKeyword] = useState("");
  const [albums,setTracks] = useState([]);

 

  const getTracks = async() =>{
    let data = await fetch(`https://v1.nocodeapi.com/harry019/spotify/cOHqTEjyYXbOrdMS/search?q=${keyword}`);
    let convertedData = await data.json();
    console.log(convertedData.albums.items);
    setTracks(convertedData.albums.items);
  
  };

  return (<>
<nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    Musio.co
  </a>
 
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
    
      <input
      value={keyword}
      onChange={event=>setKeyword(event.target.value)}
        className="form-control mr-2 w-50"
        type="search"
        placeholder="Search your music name here..."
        aria-label="Search"
      />
      <button onClick={getTracks} className="btn btn-outline-success " >
        Search 
      </button>
  
  </div>
</nav>

 <div className="container">
  <div className="row">

   
   {
    albums.map((element) => {
      return (
      <div key={element.id} className="col-lg-3 col-md-6 py-2">

        <div className="card">
  <img className="card-img-top" src={element.images[0].url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist:  {element.artists[0].name}
    </p>
    <audio src={element.preview_url }  controls className="w-100"></audio>
  </div>
</div>

        </div>
      );
    })
   }

  </div>
 </div>
  </>
  );
}

export default App;
