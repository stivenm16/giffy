import React from 'react'
import { Link } from 'wouter'
import './gif.css'

function Gif({url, id}) {
  return (
    <div className='gif-container'>
        <Link to={`/detail/${id}`}>
          <img src={url}/>
        </Link>
    </div>

  )
}

export default Gif