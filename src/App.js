import React from 'react';
import './App.css';

import {Route, Link} from 'wouter'
import ListOfGifs from './components/ListOfGifs';
import './styles/navbar.css'
import Home from './pages/Home';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifContextProvider } from './context/GifContext';


function App() {
  

  return (
    <StaticContext.Provider value=
    {
      {name: 'kev', suscribete: true}   
    }>
    <div className="App">
      
      <section className='App-content'>
        
      <div className='nav-bar'>
        <h1>¡Encuentra tus Gifs favoritos!</h1>
       

        <Link to='/'>
        <i className='bx bxl-react icon-loading'></i>  
        </Link>
        <GifContextProvider>
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
        </GifContextProvider>

    </div>

       
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
