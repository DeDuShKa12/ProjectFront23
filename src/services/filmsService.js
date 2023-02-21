import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const filmsService = {
    getByID: (id) => apiService.get(urls.movies.byId(id)),
    searchByQuery: ({query, page}) => apiService.get(urls.movies.search(), {params: {query, page}}),
    getAll: (params) => apiService.get(urls.movies.movies, { params })
}


export {
    filmsService
}