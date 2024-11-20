import { createStore } from "redux";

import { setCityReducer } from "./setCityReducer";

export const store = createStore(setCityReducer);
