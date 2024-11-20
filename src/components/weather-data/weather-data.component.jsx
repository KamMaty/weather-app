import { useSelector } from "react-redux";
const WeatherData = () => {
  const weather = useSelector((state) => state.weather);
  return (
    //  Todo: create weather cart
    // Todo: render forecast items
    <div>
      {weather && (
        <div>
          <div>
            <h1>Current weather</h1>
            <div>
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
                <span>{weather.main.temp}°C</span>
              </div>
            </div>
          </div>
          <div>
            <h1>Forecast</h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherData;
