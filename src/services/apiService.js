import axios from "axios";

import {baseURL} from "../configs/urls";

const apiService = axios.create({baseURL})


apiService.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTY4YTllZTBkMGRjNzk5ODQwNTVmYjE5MzY3NTY3ZCIsInN1YiI6IjYzZWY0NTI3MzU4MThmMDA4NWU5ZGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y9HlwpADafyRwclZvcVUg1nZD8ZcDYsauEnueyegbLk`

    return config
})


export {
    apiService,
}