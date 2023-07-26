import { createSlice } from "@reduxjs/toolkit";
import pair from "../classes/pair.ts";

const initialState: pair[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
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
    },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;