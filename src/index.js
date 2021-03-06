import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heart from "../src/containers/Heart/Heart";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Heart />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your Heart to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
