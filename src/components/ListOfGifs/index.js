
import Gif from '../Gif'

import './listofgifs.css'
import useGifs from '../../hooks/useGifs'


function ListOfGifs({params}) {
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})
    


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