const initialState = {
  products: {
    productsList: [],
    oneProduct: null,
  },
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return {
        ...state,
        productsList: action.payload,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };

    case "SELECTED_PRODUCT":
      const selectedProduct = state.productsList.find((el) => el.id === action.payload);
      return {
        ...state,
        oneProduct: selectedProduct
      };

    default:
      return state;
  }
};

export default productReducer;
