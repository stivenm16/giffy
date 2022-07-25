import React, {useContext} from 'react'
import Gif from '../../components/Gif'

import GifContext from '../../context/GifContext'

function Detail({params}) {

  const {gifs} = useContext(GifContext)
  
  const gif = gifs.find(g => g.id === params.id)
  console.log(gif)
  return (
    <>  
        
        <Gif {...gif}/>
    </>
  )
}

export default Detail