import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './getGifs';
import Gif from './Gif';


function App() {

  const [gifs, setGifs] = useState([])

  useEffect(function() {
    getGifs({keyword: 'programming'}).then(gifs => setGifs(gifs))
  },[])
  
  return (
    <div className="App">
      <section className='App-content'>
      {
        gifs.map(gif => <Gif title={gif.title} url ={gif.url} id={gif.id}/>)
      }

      </section>
    </div>
  );
}

export default App;
