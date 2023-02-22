import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {filmReducer} from "./slices/filmSlice";
import {genreReducer} from "./slices/genreSlice";

let rootReducer = combineReducers({
    film: filmReducer,
    genre: genreReducer

});


const setupStore = () => configureStore({
    reducer: rootReducer
})


export {
    setupStore
}

