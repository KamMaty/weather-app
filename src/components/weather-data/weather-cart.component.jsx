const WeatherCart = ({
  name,
  country,
  temperature,
  description,
  icon,
  humidity,
  clouds,
  wind,
  date,
}) => {
  return (
    <div className="flex-col border border-black rounded-lg items-center p2 w-2/4">
      {name && country ? (
        <div className="text-2xl font-bold">
          {name}, {country}
        </div>
      ) : (
        <div>{date}</div>
      )}

      <div className="inline-flex justify-evenly gap-4 items-center text-xl">
        <img src={icon} className="w6 h6" />
        <span>{temperature}°C</span>
      </div>
      <div className="text-basic">{description}</div>
      {/* Details container */}
      <div className="m-2 flex justify-evenly ">
        {/* Details cards */}
        {/* Clouds*/}
        <div className="detail-card">
          <div className="m-2">
            <span>Icon</span>
            <br />
            <span>WINDSPEED</span>
            <br />
            <span>{wind} m/s</span>
          </div>
        </div>
        {/* Windspeed*/}
        <div className="detail-card">
          <div className="m-2">
            <span>Icon</span>
            <br />
            <span>CLOUDS</span>
            <br />
            <span>{clouds}%</span>
          </div>
        </div>
        {/* Humidity*/}
        <div className="detail-card">
          <div className="m-2">
            <span>Icon</span>
            <br />
            <span>HUMIDITY</span>
            <br />
            <span>{humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCart;
