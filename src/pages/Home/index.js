import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import Gif from '../../components/Gif'
import './home.css'
import Category from '../../components/Category'
import TrendingSearch from '../../components/TrendingSearch'

const POPULAR_GIFS = ['Uchiha', 'Itachi', 'Naruto']



function Home() {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {gifs} = useGifs()

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