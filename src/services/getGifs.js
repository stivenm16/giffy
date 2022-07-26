import {apiKEY, api_URL} from "./settings"

export default function getGifs({keyword = 'potter'} = {}) {
    const apiURL = `${api_URL}/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    
    return  fetch(apiURL)
        .then(res => res.json())
        .then(response => {
          const {data} = response
          const gifs = data.map(image => {
        
            const {id, title, images} = image
            const {url} = images.downsized_medium
            return {title, id, url}
            
        })
        
          return gifs
    
        })
}