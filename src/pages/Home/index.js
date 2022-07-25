import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import Gif from '../../components/Gif'

const POPULAR_GIFS = ['Uchiha', 'Itachi', 'Naruto']



function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {gifs} = useGifs({keyword: 'Naruto'})

  const handleChange =  event => {
    setKeyword(event.target.value)
  }
  const handleSubmit =  event => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
    console.log(keyword) 
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        
        <input 
        placeholder='¡Busca un Gif!' 
        type='text' 
        onChange={handleChange} 
        value={keyword}
        className='input-search'
        />

        <button>Buscar</button>

      </form>
      <h4>Los gif más populares</h4>
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
        <div className='gifs-container'>
        {
          gifs.map(({title, id, url}) => 
              
              <Gif 
              title={title} 
              url ={url} 
              id={id} 
              key={id}
          />)
  
        }
        </div>

    </div>
  )
}

export default Home