import React from 'react'
import '../styles/gif.css'

function Gif({title, id, url}) {
  return (
    <div className='gif-container'>
        <h4 className='card-title'>{title}</h4>

        <img src={url}/>
    </div>

  )
}

export default Gif