import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "./slices/themeSlice";
import {filmReducer} from "./slices/filmSlice";

let rootReducer = combineReducers({
    theme: themeReducer,
    film: filmReducer

});


const setupStore = () => configureStore({
    reducer: rootReducer
})


export {
    setupStore
}

