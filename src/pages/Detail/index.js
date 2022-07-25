import React, {useContext} from 'react'
import Context from '../../context/StaticContext'
import GifContext from '../../context/GifContext'

function Detail({params}) {

  const staticConfig = useContext(Context)
  const {gifs} = useContext(GifContext)
  console.log(staticConfig)
  console.log({gifs})

  return (
    <>  
        
        <h2>Gif con id {params.id}</h2>
    </>
  )
}

export default Detail