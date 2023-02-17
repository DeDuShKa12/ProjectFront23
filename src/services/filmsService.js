import {apiService} from "./apiService";
import {urls} from "../configs/urls";

const filmsService = {
    getAll: (page) => apiService.get(urls.movies.movies, {params:page})
}


export {
    filmsService
}