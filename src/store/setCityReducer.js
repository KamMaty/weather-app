import {
  SET_CITY,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_FORECAST_SUCCESS,
  FETCH_WEATHER_FORECAST_FAILURE,
} from "./actions";

const initialState = {
  city: "",
  weather: null,
  loading: false,
  error: null,
  forecastWeather: null,
  forecastError: null,
};

export const setCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weather: action.payload };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_WEATHER_FORECAST_SUCCESS:
      return { ...state, loading: false, forecastWeather: action.payload };
    case FETCH_WEATHER_FORECAST_FAILURE:
      return { ...state, loading: false, forecastError: action.payload };
    default:
      return state;
  }
};
