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
        <i class='bx bxl-react icon-loading'></i>  
        <ul className='searcher'>
        
            <li>
                <Link to='/search/Uchiha'>
                    <h2 className='links-navbar'>
                    Uchiha  
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/search/Senju'>
                <h2 className='links-navbar'>
                        Senju
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/search/Namikaze'>
                <h2 className='links-navbar'>
                        Namikaze
                    </h2>
                </Link>        
            </li>
            <li>
                <Link to='/search/Itachi'>
                 <h2 className='links-navbar'>
                        Itachi
                    </h2>
                </Link>        
            </li>
            
            
        </ul>
        
        <Route 
        path='/search/:keyword'
        component={ListOfGifs}
        />
        

    </div>

       
      </section>
    </div>
  );
}

export default App;
