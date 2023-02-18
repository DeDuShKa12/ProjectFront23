import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmsService} from "../../services";

const initialState = {
    films:[],
    filmDetails: null,
    errors: null,
    loading: null,
};

const getAll = createAsyncThunk(
    'filmSlice/getAll',
    async ({page}, thunkAPI) =>{
        try {
            const {data} = await filmsService.getAll({page});
            return data.results

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
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

const filmSlice = createSlice({
    name: 'filmSlice',
    initialState,
    reducers:{},
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
});

const {reducer: filmReducer} = filmSlice


const filmActions = {
    getAll,
    getById
}

export {
    filmReducer,
    filmActions
}
