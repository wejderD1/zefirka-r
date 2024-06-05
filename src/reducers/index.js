const initialState = {
  productList: [],
  filteredProductsList: [],
  advertisingData: [],
  activeCategory: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_CREATED":
      // let newCreatedProductList = [...state.productList, action.payload];

      return {
        ...state,
        productList: action.payload,
      };

    case "PRODUCT_CATEGORIES_CHANGED":
      return {
        ...state,
        activeCategory: action.payload,
        filteredProductsList: state.productList.filter(
          (element) => element.category === action.payload
        ),
      };

    default:
      return state;
  }
};

export default reducer;
