import { SET_CITY, SET_WEATHER } from "./actions";

const initialState = { city: "", weather: null };

export const setCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };
    case SET_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
