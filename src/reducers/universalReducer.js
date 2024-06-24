import {
  ADD_ITEM,
  SELECT_ITEM,
  FETCHED_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../actions/types";

const initialState = {
  products: {
    itemsList: [],
    oneProduct: null,
  },
  ads: {
    itemsList: [],
  },
};

const universalReducer = (state = initialState, action) => {
  const { entity, item, id } = action.payload || {};
  switch (action.type) {
    case FETCHED_ITEM:
      return {
        ...state,
        [entity]: {
          ...state.entity,
          itemsList: item,
        },
      };

    case ADD_ITEM:
      return;

    case SELECT_ITEM:
      const selectedProduct = state.entity.find(
        (el) => el.id === action.payload
      );
      return {
        ...state,
        [entity]: {
          ...state.entity,
          oneProduct: selectedProduct,
        },
      };

    default:
      return state;
  }
};

export default universalReducer;
