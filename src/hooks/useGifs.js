import { useState, useEffect } from "react"
import getGifs from "../services/getGifs"



function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function() {
        setLoading(true)
        
      const keywordToUSe = keyword || localStorage.getItem('lastKeyword')

        getGifs({keyword: keywordToUSe})
        .then(gifs => setGifs(gifs))

        setLoading(false)
        if(keyword) localStorage.setItem('lastKeyword', keyword)
      },[keyword])

      return {loading, gifs}
}

export default useGifs


