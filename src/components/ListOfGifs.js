import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

function ListOfGifs({keyword}) {
    const [gifs, setGifs] = useState([])

    useEffect(function() {
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
      },[keyword])

  return gifs.map(({title, id, url}) => 
        <Gif 
            title={title} 
            url ={url} 
            id={id} 
            key={id}
        />)
  
}

export default ListOfGifs