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
                    <h2 className='links-navbar'>
                    Uchiha  
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Senju'>
                <h2 className='links-navbar'>
                        Senju
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Namikaze'>
                <h2 className='links-navbar'>
                        Namikaze
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/gif/Itachi'>
                <h2 className='links-navbar'>
                        Itachi
                    </h2>
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
