import axios from "axios"

const API_KEY = 'ece18299767833f2894c5d6f04a8ea62'

const allMovies = async (state) => {
    // const res = await axios.get(`https://api.themoviedb.org/3/movie/${'2'}?api_key=${API_KEY}&language=en-US`)
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    state(res.data.results)
    
    // console.log(res.data)
}


export {allMovies}