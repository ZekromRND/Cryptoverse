import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'

import App from "./App";
import './App.css'

import { BrowserRouter } from "react-router-dom";
import store from './app/store'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store} >
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
