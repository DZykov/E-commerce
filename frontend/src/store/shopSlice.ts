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
        builder.addCase(getProducts.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(getProductsCategory.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { /*fetchProducts*/ } = shopSlice.actions;
export default shopSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    var data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
    return data;
});

export const getProductsCategory = createAsyncThunk('products/category', async (str: string) => {
    if (str) {
        var data = await fetch('https://fakestoreapi.com/products/category/' + str)
            .then(res => res.json());
        return data;
    } else {
        var data = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
        return data;
    }
});
