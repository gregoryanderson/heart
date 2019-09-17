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
import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyArcEP-92kE7JJPhqqp6KFqGHMtPHiMCJM",
//   authDomain: "heart-b7be9.firebaseapp.com",
//   databaseURL: "https://heart-b7be9.firebaseio.com",
//   projectId: "heart-b7be9",
//   storageBucket: "",
//   messagingSenderId: "1094335058477",
//   appId: "1:1094335058477:web:406d2a3365df664821dea4"
// };
// firebase.initializeApp(firebaseConfig)

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child('users')

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
