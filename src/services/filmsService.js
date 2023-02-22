import {apiService} from "./apiService";
import {urls} from "../configs";

const filmsService = {
    getByID: (id) => apiService.get(urls.movies.byId(id)),
    searchByQuery: ({query, page}) => apiService.get(urls.movies.search(), {params: {query, page}}),
    getAll: (page) => apiService.get(urls.movies.movies, { params: { page } })
}


export {
    filmsService
}