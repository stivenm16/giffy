import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'

import './home.css'

import TrendingSearch from '../../components/TrendingSearch'





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
      <form onSubmit={handleSubmit} className='searcher-form'>
        
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
        
        <TrendingSearch className='trending-gifs'/>

    </div>
  )
}

export default Home