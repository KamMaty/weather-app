import { ReactComponent as CloudIcon } from "../../assets/cloud.svg";
import { ReactComponent as HumidityIcon } from "../../assets/humidity.svg";
import { ReactComponent as WindIcon } from "../../assets/wind.svg";

import DetailCard from "../weather-detail-cart/weather-detail-cart.component";

import './weather-cart.styles.css'

const WeatherCart = ({
  name,
  weather,
  description,
  clouds,
  wind,
  dt_txt,
  sys,
  main,
  cardType,
}) => {
  const isCurrent = cardType === "current";
  return (
    <div className="cart-container">
      {name && sys.country && (
        <header>
          {name}, {sys.country}
        </header>
      )}

      {dt_txt && <header>{dt_txt.slice(11, 16)}</header>}
      {/* Temperature and Icon */}
      <section className="weather-cloud-container">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <span>{main.temp}°C</span>
      </section>

      {/* Description */}
      <div>{description}</div>

      {/* Details Section */}
      <section className="weather-detials-container">
        <DetailCard
          isCurrent={isCurrent}
          icon={WindIcon}
          title="WINDSPEED"
          value={wind.speed}
          unit="m/s"
        />
        <DetailCard
          isCurrent={isCurrent}
          icon={CloudIcon}
          title="CLOUDS"
          value={clouds.all}
          unit="%"
        />
        <DetailCard
          isCurrent={isCurrent}
          icon={HumidityIcon}
          title="HUMIDITY"
          value={main.humidity}
          unit="%"
        />
      </section>
    </div>
  );
};

export default WeatherCart;
