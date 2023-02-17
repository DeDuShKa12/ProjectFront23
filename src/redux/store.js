import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "./slices/themeSlice";

let rootReducer = combineReducers({
    theme: themeReducer

});


const setupStore = () => configureStore({
    reducer: rootReducer
})


export {
    setupStore
}

