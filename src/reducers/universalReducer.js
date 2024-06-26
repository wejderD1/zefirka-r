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
          ...state[entity],
          itemsList: item,
        },
      };

    case ADD_ITEM:
      return {
        ...state,
        [entity]: {
          ...state[entity],
          itemsList: [...state[entity].itemsList, item],
        },
      };

    case SELECT_ITEM:
      return {
        ...state,
        [entity]: {
          ...state[entity],
          oneProduct: state[entity].itemsList.find((el) => el.id === id),
        },
      };

    case DELETE_ITEM:
      return {
        ...state,
        [entity]: {
          ...state[entity],
          itemsList: state[entity].itemsList.filter((el) => el.id !== id),
        },
      };

    case UPDATE_ITEM:
      return {
        ...state,
        [entity]: {
          ...state[entity],
          itemsList: state[entity].itemsList.map((el) =>
            el.id === item.id ? { ...el, ...item } : el
          ),
        },
      };

    default:
      return state;
  }
};

export default universalReducer;
