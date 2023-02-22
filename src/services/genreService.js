import {apiService} from "./apiService";
import {urls} from "../configs";

const genreService = {
    getAll: () => apiService.get(urls.genres.genres),
    getByGenreId: (id, page) => apiService.get(urls.movies.movies, { params: { with_genres: id, page: page } })
}

export {
    genreService,
}