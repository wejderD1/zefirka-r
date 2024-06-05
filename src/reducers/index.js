const initialState = {
  productsList: [],
  filteredProductsList: [],
  advertisingData: [],
  activeCategory: "",
  selectedProduct: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return {
        ...state,
        productsList: action.payload,
      };

    case "PRODUCT_CATEGORIES_CHANGED":
      return {
        ...state,
        activeCategory: action.payload,
        filteredProductsList: state.productsList.filter(
          (el) => el.category === action.payload
        ),
      };

    case "DEFAULT_CATEGORY":
      return {
        ...state,
        activeCategory: action.payload,
        filteredProductsList: state.productsList.filter(
          (el) => el.category === action.payload
        ),
      };

    case "SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
