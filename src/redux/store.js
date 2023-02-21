import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "./slices/themeSlice";
import {filmReducer} from "./slices/filmSlice";
import {genreReducer} from "./slices/genreSlice";

let rootReducer = combineReducers({
    theme: themeReducer,
    film: filmReducer,
    genre: genreReducer

});


const setupStore = () => configureStore({
    reducer: rootReducer
})


export {
    setupStore
}

