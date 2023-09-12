import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import user from "../types/user.ts";

const initialState: user = {
    id: 0,
    firstname: "firstname",
    lastname: "lastname",
    email: "email",
    enabled: true,
    nonLocked: true,
    role: "USER",
    address: {
        street: "street",
        city: "city",
        country: "country",
        postalCode: "postalCode",
    },
    token: "token",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action) => {
            // register
        });
    },
});

export const { /*fetchProducts*/ } = userSlice.actions;
export default userSlice.reducer;

export const authUser = createAsyncThunk('user/auth', async () => {

});

export const getToken = () => { return localStorage.getItem('token'); }
export const removeToken = () => { localStorage.removeItem('token'); }
export const setToken = (token: string) => { localStorage.setItem('token', token); }


