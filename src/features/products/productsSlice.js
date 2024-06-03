import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productData: [],
  },
  reducers: {
    productCreated: () => console.log("productCreated"),
  },
});

console.log(productsSlice, "productSlice");

export const { productCreated } = productsSlice.actions;
export default productsSlice.reducer;
