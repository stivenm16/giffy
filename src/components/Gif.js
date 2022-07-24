import React from 'react'

function Gif({title, id, url}) {
  return (
    <div>
        <h4>{title}</h4>
        <small>{id}</small>
        <img src={url}/>
    </div>

  )
}

export default Gif