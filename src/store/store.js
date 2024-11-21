import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import { setCityReducer } from "./setCityReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  setCityReducer,

  composeEnhancers(applyMiddleware(thunk))
);
