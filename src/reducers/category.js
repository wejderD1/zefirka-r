const initialState = {
  category: {
    categoryList: [
      "desery musowe",
      "torty musowe",
      "miodowniki",
      "napoleony",
      "torty biszkoptowe",
      "torty Opera",
      "ciastka Kartofel",
      "ciastka na patyku",
      "batoniki twarogowe",
      "moti",
      "moti alkogolowe",
      "moti lodowe"
    ],
    activeCategory: "desery musowe",
  },
};


const categoryReducer = (state = initialState.category, action) => {
  switch (action.type) {
    case "CATEGORIES_CHANGED":
      return {
        ...state,
        activeCategory: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;