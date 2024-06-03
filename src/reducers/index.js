const initialState = {
  productData: [],
  advertisingData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_CREATED":
      let newCreatedProductList = [...state.productList, action.payload];

      return {
        ...state,
        productData: newCreatedProductList
      };

    default:
      return state;
  }
}

export default reducer;