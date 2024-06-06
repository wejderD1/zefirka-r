import { combineReducers } from "redux";

const initialState = {
  products: {
    productsList: [],
    filteredProductsList: [],
    selectedProduct: "",
  },
  advertising: {
    advertisingData: [],
  },
  category: {
    activeCategory: "",
  },
};

const productReducer = (state = initialState.products, action) => {
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
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};

const categoryReducer = (state = initialState.category, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

export default rootReducer;
