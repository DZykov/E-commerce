import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pair from "../types/pair.ts";
import product from "../types/product.ts";

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
    },
    extraReducers: (builder) => {
        builder.addCase(updateCart.fulfilled, (_state, _action) => {

        });
    }
});

export const updateCart = createAsyncThunk('cart/update', async (cart: pair[]) => {
    let items!: number[];
    cart.forEach(function (pair: pair, _index: number) {
        items.concat(Array(pair.count).fill(pair.item.id));
    });
    var data = await fetch('http://localhost:3000/api/cart/add', {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(items)
    }).then(res => res.json());
    return data;
});

export const { add, removeItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;