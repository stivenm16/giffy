import { useState, useEffect, useContext } from "react"
import getGifs from "../services/getGifs"
import GifContext from "../context/GifContext"


function useGifs({keyword} = {keyword: null}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifContext)


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


