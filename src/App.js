import './App.css';
import { useState } from 'react';

function App() {

  const [tracks,setTracks] = useState([])

  const getTracks =() =>{

  }

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

 <div className="container">
  <div className="row">

  </div>
 </div>
  </>

}

export default App;
