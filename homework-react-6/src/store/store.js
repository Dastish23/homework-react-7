import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/slice/cartSlice';
import productReducer from '../components/slice/productSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});
export default store;