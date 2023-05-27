import { createSlice } from "@reduxjs/toolkit"



let initialState = {
    show: false
}


const offCanvasSlice =  createSlice({
    name:'offCanvas',
    initialState,
    reducers:{
        handleShow:(state,action) => {
            state.show = action.payload
        },
       
    }
    
})
export const offCanvasReducer = offCanvasSlice.reducer;
export  const {handleShow} = offCanvasSlice.actions
