const URL = 'https://api.themoviedb.org/3'

const ApiKey = 'e7d82ad5e8954902a701e59abc2800bf'
const ReadAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2Q4MmFkNWU4OTU0OTAyYTcwMWU1OWFiYzI4MDBiZiIsInN1YiI6IjViNjllMjVlOTI1MTQxMDM0MTAwODBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.31KSbVBNDhk0ux9E8v75RLKehGQVciH89Qegg31rAAE'
const headers={
    'Accept':'application/json',
    'AccessToken': ReadAccessToken
}
export const getNowPlaying =()=>
    fetch(`${URL}/movie/now_playing?api_key=${ApiKey}`,headers)
    .then(res=>res.json())
    .then(res=>res)

export const searchMovies=(query)=>
    fetch(`${URL}/search/movie?api_key=${ApiKey}&query=${query}`,headers)
    .then(res=>res.json())
    .then(res=>res)

export const getDetails=(id)=>
    fetch(`${URL}/movie/${id}?api_key=${ApiKey}`,headers)
    .then(res=>res.json())
    .then(res=>res)

export const getKeywords =(id)=>
    fetch(`${URL}/movie/${id}/keywords?api_key=${ApiKey}`,headers)
    .then(res=>res.json())
    .then(res=>{console.log(res)})

export const getUpcomingMovies=()=>
    fetch(`${URL}/movie/upcoming?api_key=${ApiKey}`, headers)
    .then(res=>res.json())
    .then(res=>res)