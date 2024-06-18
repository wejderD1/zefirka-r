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
    case "ADVERTISING_CREATE":
      return {
        ...state,
        advertisingsList: [...state.advertisingsList, action.payload],
      };

    case "ADVERTISING_DELETE":
      return {
        ...state,
        advertisingsList: state.advertisingsList.filter(el => el.id !== action.payload)
      }

    default:
      return state;
  }
};

export default advertisingReducer;