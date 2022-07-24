const apiKEY = 'S3u5BqdfNLOzKl7BE0BiMTRMaAV8rOiM'







export default function getGifs(keyword = 'potter') {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    
    return  fetch(apiURL)
        .then(res => res.json())
        .then(response => {
          const {data} = response
          const gifs = data.map(image => image. images.downsized_medium.url)
          return gifs
    
        })
}