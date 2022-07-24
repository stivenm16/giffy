import React, {useState, useEffect} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

function ListOfGifs({params}) {
    const {keyword} = params

    const [gifs, setGifs] = useState([])

    useEffect(function() {
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
      },[keyword])

  return  <div>
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
  
}

export default ListOfGifs