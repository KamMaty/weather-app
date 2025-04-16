import { useSelector } from "react-redux";
import WeatherCart from "../weather-cart/weather-cart.component";
import './weather-data.styles.css'

const WeatherData = () => {
  const meteorologicalData = useSelector((state) => state.meteorologicalData);
  const forecastWeatherList = useSelector((state) => state.forecastWeather);

  return (
    //  Todo: create weather cart
    // Todo: render forecast items
    <>
        {meteorologicalData && (
          <div className="weather-now">
            <h1>Current Weather</h1>
            <WeatherCart cardType="current" {...meteorologicalData} />
          </div>
        )}

        {forecastWeatherList && (
          <div className="weather-now">
            <h1>Forecast Weather</h1>
              {forecastWeatherList.slice(0, 9).map((forecastElement, i) => (
                <WeatherCart key={i} cardType="forecast" {...forecastElement} />
              ))}
          </div>
        )}
    </>
  );
};

export default WeatherData;
