
import {apiKEY, api_URL} from "./settings"

export default function getTrendingTerms() {
    const apiURL = `${api_URL}/trending/searches?api_key=${apiKEY}`
    
    return  fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            
            return data.slice(0,5)
        })
        
          
    
        }
