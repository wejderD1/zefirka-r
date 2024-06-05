import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";

import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(reducer, "reducer");
export default store;
