import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import product from "../types/product.ts";

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
        builder.addCase(getProducts.fulfilled, (_state, action) => {
            console.log(action.payload)
            return action.payload;
        });
        builder.addCase(getProductsSearch.fulfilled, (_state, action) => {
            return action.payload;
        });
    },
});

export const { /*fetchProducts*/ } = shopSlice.actions;
export default shopSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    var data = await fetch('http://localhost:3000/api/item/all')
        .then(res => res.json());
    return data;
});

export const getProductsSearch = createAsyncThunk('products/search', async (search: string) => {
    if (search) {
        var data = await fetch('http://localhost:3000/api/item/search?query=' + search)
            .then(res => res.json());
        return data;
    }
    var data = await fetch('http://localhost:3000/api/item/all')
        .then(res => res.json());
    return data;
});
