import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {filmsService} from "../../services";


const initialState = {
    films:[],
    searchFilms: [],
    selectedQuery: null,
    errors: null,
    loading: null,
    totalPages: 1,
};


const getAll = createAsyncThunk(
    "filmSlice/getAll",
    async ({ page}, thunkAPI) => {
        try {
            const { data } = await filmsService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'filmSlice/getById',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await filmsService.getByID(id);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);



const search = createAsyncThunk(
    'filmSlice/search',
    async (params, thunkAPI) => {
        try {
            const config = {
                    query: params.query.name,
                    page: params.page
            };
            const { data } = await filmsService.searchByQuery(config);

            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);




const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers:{
        setSelectedQuery: (state, action) => {
            state.selectedQuery = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.films = action.payload.results
                state.loading = false
                state.totalPages = action.payload.total_pages
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(getAll.rejected, (state, action)=>{
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.filmDetails = action.payload
            })
            .addCase(search.fulfilled, (state, action)=>{
                state.searchFilms = action.payload.results
                state.totalPages = action.payload.total_pages
            })
            .addCase(search.rejected, (state, action)=>{
                state.errors = action.payload
            })
});

const {reducer: filmReducer, actions: {setSelectedQuery}} = filmSlice


const filmActions = {
    getAll,
    getById,
    search,
    setSelectedQuery,
}

export {
    filmReducer,
    filmActions
}
