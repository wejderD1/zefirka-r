import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { faArrowLeft, faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const root = ReactDOM.createRoot(document.getElementById('root'));
library.add(faArrowLeft, faArrowRight, faArrowDown);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
