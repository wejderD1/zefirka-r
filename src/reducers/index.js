import { combineReducers } from "redux";

import productReducer from "./products";
import categoryReducer from "./category";
import advertisingReducer from "./advertising";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  advertisingReducer
});

export default rootReducer;
