const initialState = {
  count: 0
}

const userFetchCounter = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTER":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export default userFetchCounter;