import React, {useState, useEffect} from 'react'
import Gif from '../Gif'
import getGifs from '../../services/getGifs'
import './listofgifs.css'

function ListOfGifs({params}) {
    const {keyword} = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function() {
        setLoading(true)
        getGifs({keyword})
        .then(gifs => setGifs(gifs))

        setLoading(false)
      },[keyword])



    

  return  <div className='gifs-container'>
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