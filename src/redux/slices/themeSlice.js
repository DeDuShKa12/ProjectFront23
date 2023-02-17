import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state,action) => {
            state.darkMode = !state.darkMode;
        },
    },
});


const {reducer: themeReducer, actions: {toggleTheme}} = themeSlice;

const themeActions = {
    toggleTheme
}

export {
    themeReducer,
    themeActions
}