import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  reactReduxFirebase,
  getFirebase,
  authIsReady
} from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebaseConfig from "./firebase/firebaseConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, {
      useFirestoreForProfile: true,
      userProfile: "users"
    }),
    reduxFirestore(firebaseConfig)
  )
);

authIsReady(store, "firebase").then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
