const baseURL = 'https://api.themoviedb.org/3'


const movies = '/discover/movie'


const urls = {
    movies:{
        movies,
        byId: (id) => `/movie/${id}`
    }
}

export {
    baseURL,
    urls,
}