const initialState = {
  category: {
    categoryList: [],
    activeCategory: "zefir", // это неправильно, нужно поменять на переменную
  },
};


const categoryReducer = (state = initialState.category, action) => {
  switch (action.type) {
    case "CATEGORIES_CHANGED":
      return {
        ...state,
        activeCategory: action.payload,
        // filteredProductsList: state.productsList.filter(
        //   (el) => el.category === action.payload
        // ),
      };

    default:
      return state;
  }
};

export default categoryReducer;