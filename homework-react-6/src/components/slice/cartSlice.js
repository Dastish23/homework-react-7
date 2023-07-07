import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            console.log(action);
            const item = action.payload;
            let productItem = state.cartItems.find(product => product._id === item._id);
            if(productItem){
              productItem.quantity += 1;
            }else{
              state.cartItems = [item,...state.cartItems];

            }
        },
        incrementQ(state, action){
            const item = action.payload;
            let productItem = state.cartItems.find(product => product._id === item._id);
            if(productItem){
              productItem.quantity += 1;
              
            }
        },
    }
});

export const { addToCart, incrementQ, decrementQ, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;