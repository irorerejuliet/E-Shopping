import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    Products: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct(state, action){
            state.Products = action.payload
        }

    },
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer