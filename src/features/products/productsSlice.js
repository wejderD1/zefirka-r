import { createSlice } from "@reduxjs/toolkit";



export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [{a: "a"}],
  },
  reducers: {
    productsFetched: (state, action) => {state.productList = action.payload},
    productCreated: () => console.log("productCreated"),
    productRemoved: () => console.log("productRemoved"),
  },
});

export const { productsFetched, productCreated, productRemoved } =
  productsSlice.actions;
export default productsSlice.reducer;
