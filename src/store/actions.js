export const SET_CITY = "SET_CITY";
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";
export const FETCH_WEATHER_FORECAST_SUCCESS = "FETCH_WEATHER_FORECAST_SUCCESS";
export const FETCH_WEATHER_FORECAST_FAILURE = "FETCH_WEATHER_FORECAST_FAILURE";

export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setWeather = (weatherData) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

export const fetchWeather = (city) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });

  try {
    const userCityResponse = await fetch(
      `${process.env.REACT_APP_API_URL}geo/1.0/direct?q=${city}&limit=2&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!userCityResponse.ok) {
      throw new Error("City not found");
    }
    const userCity = await userCityResponse.json();

    const weatherResponse = await fetch(
      `${process.env.REACT_APP_API_URL}data/2.5/weather?lat=${userCity[0].lat}&lon=${userCity[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const userWeather = await weatherResponse.json();

    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: userWeather });

    const weatherForecastResponse = await fetch(
      `${process.env.REACT_APP_API_URL}data/2.5/forecast?lat=${userCity[0].lat}&lon=${userCity[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const weatherForecast = await weatherForecastResponse.json();
    dispatch({
      type: FETCH_WEATHER_FORECAST_SUCCESS,
      payload: weatherForecast.list,
    });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
    dispatch({ type: FETCH_WEATHER_FORECAST_FAILURE, payload: error.message });
  }
};
