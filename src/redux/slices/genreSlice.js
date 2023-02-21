import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services/genreService";


const initialState = {
    genres:[],
    movieByGenres: [],
    errors: null,
    loading: null,
    totalPages: 1,
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) =>{
        try {
            const {data} = await genreService.getAll();
            return data.genres

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
);


const getMoviesByGenre = createAsyncThunk(
    "genresSlice/getMoviesByGenre",
    async ({id, page}, thunkAPI) => {
        try {
            const { data } = await genreService.getByGenreId(id, page );
            return data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);



const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(getAll.rejected, (state, action)=>{
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action)=>{
                state.movieByGenres = action.payload.results
                state.totalPages = action.payload.total_pages
            })

});

const {reducer: genreReducer} = genresSlice


const genresActions = {
    getAll,
    getMoviesByGenre

}

export {
genresActions,
    genreReducer
}
