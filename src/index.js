import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'

import {
  faArrowLeft,
  faArrowRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import App from "./App";
import store from "./store";

import "./index.scss";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
library.add(faArrowLeft, faArrowRight, faArrowDown);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
