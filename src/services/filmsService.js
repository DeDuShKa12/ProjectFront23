import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const filmsService = {
    getAll: (page) => apiService.get(urls.movies.movies, {params:page}),
    getByID: (id) => apiService.get(urls.movies.byId(id)),
    searchByQuery: (query, page) => apiService.get(urls.movies.search(query), {params:page})
}


export {
    filmsService
}