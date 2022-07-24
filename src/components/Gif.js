import React from 'react'
import '../styles/gif.css'

function Gif({title, id, url}) {
  return (
    <div className='gif-container'>
        <h4>{title}</h4>
        <small>{id}</small>
        <img src={url}/>
    </div>

  )
}

export default Gif