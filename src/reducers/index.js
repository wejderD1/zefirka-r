import { combineReducers } from "redux";

import categoryReducer from "./category";
import universalReducer from "./universalReducer";
import userFetchCounter from "./userFetchCounter";

const rootReducer = combineReducers({
  universalReducer,
  categoryReducer,
  userFetchCounter
});

export default rootReducer;
