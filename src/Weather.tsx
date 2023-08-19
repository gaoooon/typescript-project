import { weather } from "./model/data";
interface props {
  cityWeather: weather;
}

const Weather: React.FC<props> = ({ cityWeather }) => {
  return (
    <div>
      {cityWeather.city !== ""
        ? `${cityWeather.city} ${cityWeather.weather} ${cityWeather.temp}`
        : null}
    </div>
  );
};

export default Weather;
