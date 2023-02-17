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

// Action creators are generated for each case reducer function
const {reducer: themeReducer, actions: {toggleTheme}} = themeSlice;

const themeActions = {
    toggleTheme
}

export {
    themeReducer,
    themeActions
}