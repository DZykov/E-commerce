import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pair from "../types/pair.ts";
import product from "../types/product.ts";
import { getToken } from "./api.ts";

const initialState: pair[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<product>) {
            let _new: boolean = true;
            state.forEach(function (pair: pair, index: number) {
                if (pair.item.id == action.payload.id) {
                    state[index].count++;
                    _new = false;
                }
            });
            if (_new) {
                state.push({ item: action.payload, count: 1 } as pair);
            }
        },
        removeItem(state, action) {
            return state.filter(pair => pair.item.id !== action.payload.id);
        },
        decrementItem(state, action: PayloadAction<product>) {
            state.forEach(function (pair: pair, index: number) {
                if (pair.item.id == action.payload.id) {
                    state[index].count--;
                    if (state[index].count == 0) {
                        state.splice(index, 1);
                    }
                }
            });
        },
        logoutCart(state) {
            state = initialState;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateCart.fulfilled, (_state, _action) => {
        });
        builder.addCase(getCart.fulfilled, (_state, action) => {
            _state = action.payload;
            return action.payload;
        });
    }
});

export const getCart = createAsyncThunk('cart/get', async () => {

    var data = await fetch('http://localhost:3000/api/cart/get/0', {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
    data = data.itemsId;

    var state: pair[] = [];

    const promises = data.map(async (id: number) => {
        const p = await fetch(
            "http://localhost:3000/api/item/get/" + id)
            .then((res) => res.json());
        return p;
    });

    const products: product[] = await Promise.all(promises);

    products.forEach(function (product: product) {
        let _new: boolean = true;
        state.forEach(function (pair: pair, index: number) {
            if (pair.item.id == product.id) {
                state[index].count++;
                _new = false;
            }
        });
        if (_new) {
            state.push({ item: product, count: 1 } as pair);
        }
    });

    return state;
});

export const updateCart = createAsyncThunk('cart/update', async (cart: pair[]) => {
    var items: number[] = [];
    cart.forEach(function (pair: pair, _index: number) {
        items = items.concat(Array(pair.count).fill(pair.item.id));
    });
    var data = await fetch('http://localhost:3000/api/cart/add', {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(items)
    }).then(function (res) {
        return res.json();
    });
    return data;
});

export const addItemToCart = createAsyncThunk('cart/update', async (id: number) => {

    var data = await fetch('http://localhost:3000/api/cart/add/' + id, {
        method: 'PUT',
        headers: new Headers({
            'Authorization': 'Bearer ' + getToken(),
            'Content-Type': 'application/json'
        }),
    }).then(res => res.json());
    return data;
});

export const { add, removeItem, decrementItem, logoutCart } = cartSlice.actions;
export default cartSlice.reducer;