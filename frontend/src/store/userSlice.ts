import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import user from "../types/user.ts";
import { getToken, setToken } from "./api.ts";

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
        logout(state) {
            state = initialState;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state = action.payload[1];
            state.access_token = action.payload[0].access_token;
            setToken(state.access_token!);
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
            if (action.payload.id == 0) {
                return;
            }
            state = action.payload;
            state.access_token = "" + getToken();
        });

    },
});

export const { logout } = userSlice.actions;
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
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(schema)
    }).then(function (res) {
        if (!res.ok) {
            return initialState;
        }
        return res.json()
    });
    return data;
});

export const getMe = createAsyncThunk('user/get', async () => {
    var data = await fetch('http://localhost:3000/api/user/get/0', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyQG1haWwuY29tIiwiaWF0IjoxNjk0OTk4OTg1LCJleHAiOjE2OTUwODUzODV9.vraovAVxt68SziwJ_gCQziJssCjAhX_guYpPYzBh0wc",
            'Content-Type': 'application/json'
        }),
    }).then(function (res) {
        console.log()
        if (!res.ok) {
            return initialState;
        }
        return res.json()
    });
    return data;
});

export const updateUser = createAsyncThunk('user/update', async (user: user) => {
    var data = await fetch('http://localhost:3000/api/user/update/0', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(user)
    }).then(function (res) {
        if (!res.ok) {
            return initialState;
        }
        return res.json()
    });
    var new_user: user = initialState;
    new_user.city = data.city;
    new_user.id = data.id;
    new_user.country = data.country;
    new_user.email = data.email;
    new_user.enabled = data.enabled;
    new_user.firstname = data.firstname;
    new_user.id = data.id;
    new_user.lastname = data.lastname;
    new_user.nonLocked = data.nonLocked;
    new_user.postalCode = data.postalCode;
    new_user.role = data.role;
    new_user.street = data.street;
    return new_user;
});
