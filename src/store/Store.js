import { loadingBarMiddleware } from "react-redux-loading-bar";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./../Reducers/Reducers";

export const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk, loadingBarMiddleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
