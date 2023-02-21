import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmsService} from "../../services";


const initialState = {
    films:[],
    searchFilms: [],
    selectedQuery: null,
    selectedGenre: null,
    errors: null,
    loading: null,
};


const getAll = createAsyncThunk(
    "filmSlice/getAll",
    async ({ page, genre }, thunkAPI) => {
        try {
            const { data } = await filmsService.getAll({ page, with_genres: genre });
            return data.results;
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

            return data.results;
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
        },
        setSelectedGenre: (state, action)=>{
            state.selectedGenre = action.payload
        },
        delSelectedGenre: (state, action)=>{
            state.selectedGenre = null
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.films = action.payload
                state.loading = false
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
                state.searchFilms = action.payload
            })
});

const {reducer: filmReducer, actions: {setSelectedQuery, setSelectedGenre, delSelectedGenre}} = filmSlice


const filmActions = {
    getAll,
    getById,
    search,
    setSelectedQuery,
    setSelectedGenre,
    delSelectedGenre
}

export {
    filmReducer,
    filmActions
}
