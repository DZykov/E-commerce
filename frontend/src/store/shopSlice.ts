import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import product from "../classes/product.ts";

const initialState: product[] = [];

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        //fetchProducts(state, action) {
        //    return action.payload
        //},
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const { /*fetchProducts*/ } = shopSlice.actions;
export default shopSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    var data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
    return data;
})

