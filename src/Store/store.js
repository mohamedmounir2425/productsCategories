import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slices/productSlice";
import { offCanvasReducer } from "./Slices/offCanvas";


export let store = configureStore({
    reducer : {
        productSlice:productReducer,
        offCanvaseSlice: offCanvasReducer
    }

})