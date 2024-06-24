import { combineReducers } from "redux";

import categoryReducer from "./category";
import universalReducer from "./universalReducer";

const rootReducer = combineReducers({
  universalReducer,
  categoryReducer,
});

export default rootReducer;
