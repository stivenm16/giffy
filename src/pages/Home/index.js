import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
const POPULAR_GIFS = ['Uchiha', 'Itachi', 'Naruto']



function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  

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
        
        <input placeholder='¡Busca un Gif!' type='text' onChange={handleChange} value={keyword}/>

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
    </div>
  )
}

export default Home