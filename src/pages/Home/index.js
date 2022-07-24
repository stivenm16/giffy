import React from 'react'
import { Link } from 'wouter'
const POPULAR_GIFS = ['Uchiha', 'Itachi', 'Naruto']

function Home() {
  return (
    <div>
        <ul className='searcher'>
            {POPULAR_GIFS.map(popularGif => (
                <li key={popularGif}>
                <Link to={`/search/${popularGif}`}>
                    <h2 className='links-navbar'>
                    {popularGif}
                    </h2>
                </Link>        
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Home