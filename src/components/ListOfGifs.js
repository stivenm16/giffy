import React from 'react'
import Gif from './Gif'

function ListOfGifs({gifs}) {
  return (
    gifs.map(gif => 
        <Gif 
        title={gif.title} 
        url ={gif.url} 
        id={gif.id} 
        key={gif.id}
        />)
  )
}

export default ListOfGifs