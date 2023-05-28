import { createSlice } from "@reduxjs/toolkit"



let initialState = {
    show: false
}


const popupSlice =  createSlice({
    name:'popup',
    initialState,
    reducers:{
        handleShowPopupSearch:(state,action) => {
            state.show = action.payload
        },
       
    }
    
})
export const popupReducer = popupSlice.reducer;
export const {handleShowPopupSearch} = popupSlice.actions
