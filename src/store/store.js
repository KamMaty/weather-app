import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { setCityReducer } from "./setCityReducer";

export const store = createStore(setCityReducer, applyMiddleware(thunk));
