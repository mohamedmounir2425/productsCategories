import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slices/productSlice";
import { offCanvasReducer } from "./Slices/offCanvas";
import { popupReducer } from "./Slices/PopupSearch";


export let store = configureStore({
    reducer : {
        productSlice:productReducer,
        offCanvaseSlice: offCanvasReducer,
        popupSlice:popupReducer,
    }

})