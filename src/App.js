import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './getGifs';


function App() {

  const [gifs, setGifs] = useState([])

  useEffect(function() {
    getGifs().then(gifs => setGifs(gifs))
  },[])
  
  return (
    <div className="App">
      <section className='App-content'>
      {
        gifs.map(gif => <img src={gif}/>)
      }

      </section>
    </div>
  );
}

export default App;
