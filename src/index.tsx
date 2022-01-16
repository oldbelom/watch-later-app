import React, { createContext } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import App from "./App";
import "firebase/firestore";
import "firebase/auth";

import "./scss/style.scss";

firebase.initializeApp({
  apiKey: "AIzaSyBwEj-Ns-TK_UyaZgxJJGx1ZdcEHchyG5s",
  authDomain: "watch-later-app-bc3fa.firebaseapp.com",
  projectId: "watch-later-app-bc3fa",
  storageBucket: "watch-later-app-bc3fa.appspot.com",
  messagingSenderId: "368375111064",
  appId: "1:368375111064:web:e4d22f8394e472f67e9fed",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext<ContextType>({
  firebase,
  auth,
  firestore,
});

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  rootElement || document.createElement("div")
);
