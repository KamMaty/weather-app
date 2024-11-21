import { useSelector } from "react-redux";
import WeatherCart from "./weather-cart.component";

const WeatherData = () => {
  const weather = useSelector((state) => state.weather);
  const forecastWeatherList = useSelector((state) => state.forecastWeather);

  return (
    //  Todo: create weather cart
    // Todo: render forecast items
    <div>
      {weather && (
        <div class="flex justify-center">
          <WeatherCart
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
      {forecastWeatherList && <h1>forecast weather</h1>}
      <div className="grid grid-cols gap-4">
        {forecastWeatherList &&
          forecastWeatherList
            .slice(0, 10)
            .map((forecastElement, i) => (
              <WeatherCart
                key={i}
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
  );
};
export default WeatherData;
