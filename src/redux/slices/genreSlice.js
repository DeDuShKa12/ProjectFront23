import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";

const initialState = {
    genres:[],
    selectedQuery: null,
    errors: null,
    loading: null,
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



const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{
        setSelectedQuery: (state, action) => {
            state.selectedQuery = action.payload
        }
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

});

const {reducer: genreReducer} = genresSlice


const genresActions = {
    getAll,

}

export {
genresActions,
    genreReducer
}
