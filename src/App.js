import React,{useState} from 'react';
import './App.css';
import {Route} from 'wouter'
import ListOfGifs from './components/ListOfGifs';


function App() {
  
  // const [keyword, setKeyword] = useState('itachi')

  return (
    <div className="App">
      {/* <button onClick={() => setKeyword('uchiha')}> Cambiar Gif</button> */}
      <section className='App-content'>
        <h1>App</h1>
        <Route 
        path='/gif/:keyword'
        component={ListOfGifs}
        />
        {/* <ListOfGifs keyword={keyword}/> */}

      </section>
    </div>
  );
}

export default App;
