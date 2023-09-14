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
    street: "street",
    city: "city",
    country: "country",
    postalCode: "postalCode",
    access_token: "token",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state = action.payload[1];
            state.access_token = action.payload[0].access_token;
        });

        builder.addCase(authUser.fulfilled, (state, action) => {
            state.access_token = action.payload.access_token;
            setToken(state.access_token!);
        });

        builder.addCase(getMe.fulfilled, (state, action) => {
            state.city = action.payload.city;
            state.id = action.payload.id;
            state.country = action.payload.country;
            state.email = action.payload.email;
            state.enabled = action.payload.enabled;
            state.firstname = action.payload.firstname;
            state.id = action.payload.id;
            state.lastname = action.payload.lastname;
            state.nonLocked = action.payload.nonLocked;
            state.postalCode = action.payload.postalCode;
            state.role = action.payload.role;
            state.street = action.payload.street;
        });

        builder.addCase(updateUser.fulfilled, (state, action) => {
            state = action.payload;
            state.access_token = "" + getToken;
        });

    },
});

export const { /*fetchProducts*/ } = userSlice.actions;
export default userSlice.reducer;

export const registerUser = createAsyncThunk('user/register', async (user: user) => {
    var data = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(res => res.json());
    return [data, user];
});

export const authUser = createAsyncThunk('user/auth', async (schema: {
    email: string;
    password: string;
}) => {
    var data = await fetch('http://localhost:3000/api/auth/authenticate', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(schema)
    }).then(res => res.json());
    return data;
});

export const getMe = createAsyncThunk('user/get', async (id: number) => {
    var data = await fetch('http://localhost:3000/api/user/get/' + id, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken,
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
    return data;
});

export const updateUser = createAsyncThunk('user/update', async (user: user) => {
    var data = await fetch('http://localhost:3000/api/management/user/update/0', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(res => res.json());
    return user;
});

export const getUser = async () => {

};

export const createUser = async () => {

};

export const blockUser = async () => {

};

export const deleteUser = async () => {

};


export const updateItem = async () => {

};

export const createItem = async () => {

};

export const deleteItem = async () => {

};

export const getToken = () => { return localStorage.getItem('token'); }
export const removeToken = () => { localStorage.removeItem('token'); }
export const setToken = (token: string) => { localStorage.setItem('token', token); }


