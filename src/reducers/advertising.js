const initialState = {
  advertisings: {
    advertisingsList: [],
  },
};

const advertisingReducer = (state = initialState.advertisings, action) => {
  switch (action.type) {
    case "ADVERTISING_FETCHED":
      return {
        ...state,
        advertisingsList: action.payload,
      };
    case "ADVERTIOSING_CREATE":
      return {
        ...state,
        advertisingsList: [...state.advertisingsList, action.payload],
      };

    default:
      return state;
  }
};

export default advertisingReducer;
