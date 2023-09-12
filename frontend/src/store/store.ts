import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import shopSlice from "./shopSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
        shop: shopSlice,
        user: userSlice
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
