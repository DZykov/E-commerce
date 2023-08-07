import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
});

export const { add, removeItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;