import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";





let initialState = {
    products:[],
    searchQuery:'',
    count: 0,
    isLoading:false,
    error:null
}
const baseURL = 'https://forkify-api.herokuapp.com/api/search?q='
export const getData = createAsyncThunk('MyProducts/getData',async (args,thunkApi) => {
    const {rejectWithValue} = thunkApi;
    try {
        const {data} = await axios.get(baseURL + args)
 
        return data.recipes
    } catch (error) {
        return rejectWithValue(error.message)
        
    }
})

const productSlice = createSlice({
    name:'MyProducts',
    initialState,
    reducers:{
        search: (state,action) => {
            const {query} = action.payload;
            state.searchQuery = query

        }
    },
    extraReducers:{

        [getData.pending] : (state, action) => {
            state.isLoading = true
        },
        [getData.fulfilled] : (state, action) => {
            state.count = action.payload.length;
            state.isLoading = false;
            
            state.products = action.payload;
        },
        [getData.pending] : (state, action) => {
            state.isLoading = true
            state.error = action.payload;
        },

    }
})

export const productReducer = productSlice.reducer;
export const {search} = productSlice.actions;
