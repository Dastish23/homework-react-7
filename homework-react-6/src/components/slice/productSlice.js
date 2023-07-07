import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  'getProducts',
  async(data,{rejectWithValue,dispatch}) => {
      const response = await fetch('https://dummyjson.com/products?limit=10&skip=10')
      const dataP = await response.json()
      dispatch(productsInfo(dataP?.products))
      
  }
)

 const productSlice = createSlice({
    name: 'product',
    initialState:{
      products:[]
    },
    reducers: {
      productsInfo: (state,action) => {
        state.products = action.payload
      },
}});

export const {productsInfo} = productSlice.actions
export default productSlice.reducer;