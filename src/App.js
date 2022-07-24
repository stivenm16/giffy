import React from 'react';
import './App.css';

import {Route, Link} from 'wouter'
import ListOfGifs from './components/ListOfGifs';
import './styles/navbar.css'
import Home from './pages/Home';
import Detail from './pages/Detail';


function App() {
  

  return (
    <div className="App">
      
      <section className='App-content'>
        
      <div className='nav-bar'>
        <h1>Puedes buscar Gifs de:</h1>
        
        <Link to='/'>
        <i className='bx bxl-react icon-loading'></i>  
        </Link>

        <Route 
        path='/'
        component={Home}
        />
        <Route 
        path='/search/:keyword'
        component={ListOfGifs}
        />
        <Route 
        component={Detail}
        path='/detail/:id'
        />
        

    </div>

       
      </section>
    </div>
  );
}

export default App;
