import React from 'react';
import './App.css';

import {Route, Link} from 'wouter'
import ListOfGifs from './components/ListOfGifs';
import './styles/navbar.css'





function App() {
  

  return (
    <div className="App">
      
      <section className='App-content'>
        
        
      <div className='nav-bar'>
        <h1>Puedes buscar Gifs de:</h1>
        <ul className='searcher'>
            <li>
                <Link to='/gif/Uchiha'>
                    <h3>
                    Uchiha  
                    </h3>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Senju'>
                    <h3>
                        Senju
                    </h3>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Namikaze'>
                    <h3>
                        Namikaze
                    </h3>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Itachi'>
                    <h3>
                        Itachi
                    </h3>
                </Link>        
            </li>
            <li>
                
            </li>
        </ul>
        
        <Route 
        path='/gif/:keyword'
        component={ListOfGifs}
        />
        

    </div>

       
      </section>
    </div>
  );
}

export default App;
