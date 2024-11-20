export const SET_CITY = "SET_CITY";
export const SET_WEATHER = "SET_WEATHER";

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setWeather = (weatherData) => ({
  type: SET_WEATHER,
  payload: weatherData,
});
