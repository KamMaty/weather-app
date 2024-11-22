import { useSelector } from "react-redux";
import WeatherCart from "./weather-cart.component";

const WeatherData = () => {
  const weather = useSelector((state) => state.weather);
  const forecastWeatherList = useSelector((state) => state.forecastWeather);

  return (
    //  Todo: create weather cart
    // Todo: render forecast items
    <div className="container justify-items-center">
      <div className="w-2/3">
        {weather && (
          <div>
            <h1>Current Weather</h1>
            <WeatherCart
              weather="current"
              name={weather.name}
              country={weather.sys.country}
              temperature={weather.main.temp}
              description={weather.weather[0].description}
              humidity={weather.main.humidity}
              clouds={weather.clouds.all}
              wind={weather.wind.speed}
              icon={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          </div>
        )}
      </div>
      <div className="w-2/3 md:w-screen">
        {forecastWeatherList && (
          <div>
            <h1 className="m-4">Forecast Weather</h1>
            <div className="grid md:grid-cols-3 gap-4 md:w-full m-1 ">
              {forecastWeatherList.slice(0, 10).map((forecastElement, i) => (
                <WeatherCart
                  key={i}
                  weather="forecast"
                  name={forecastElement.name}
                  country={forecastElement.sys.country}
                  temperature={forecastElement.main.temp}
                  description={forecastElement.weather[0].description}
                  humidity={forecastElement.main.humidity}
                  clouds={forecastElement.clouds.all}
                  wind={forecastElement.wind.speed}
                  icon={`https://openweathermap.org/img/wn/${forecastElement.weather[0].icon}@2x.png`}
                  date={forecastElement.dt_txt}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WeatherData;
