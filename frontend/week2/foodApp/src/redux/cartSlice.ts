import { createSlice } from "@reduxjs/toolkit";
import type { Food } from "../types";

const initialState:Food[] = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state: Food[],action) => {
            state.push(action.payload);
        },
        removeFromCart:(state,action) => {
            return state.filter((item: Food) => item.id !== action.payload);
        }
    }
});
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;