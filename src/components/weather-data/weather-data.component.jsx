import { useSelector } from "react-redux";
const WeatherData = () => {
  const weather = useSelector((state) => state.weather);
  return (
    <div>
      {weather && (
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
      )}
    </div>
  );
};
export default WeatherData;
