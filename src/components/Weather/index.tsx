import { WeatherForm, WeatherType } from "../../model/data";
import { WeatherContainer } from "./style";

const weatherTypes: WeatherType = {
  Clear: "맑음",
  "Partly Cloudy": "구름 조금",
  Clouds: "흐림",
  Overcast: "구름 많음",
  Rain: "비",
  Drizzle: "이슬비",
  Showers: "소나기",
  Thunderstorms: "천둥번개",
  Snow: "눈",
  Fog: "안개",
  Hail: "우박",
  Mist: "안개",
  Smoke: "연기",
  Dust: "먼지",
  Sand: "모래",
  Ash: "화산재",
  Squalls: "돌풍",
  Tornado: "토네이도",
};

interface props {
  cityWeather: WeatherForm;
}

const Weather: React.FC<props> = ({ cityWeather }) => {
  console.log(cityWeather.weather);
  return (
    <>
      {cityWeather.temp !== 0 ? (
        <WeatherContainer>
          <div>지역:{cityWeather.city}</div>{" "}
          <div>날씨:{weatherTypes[cityWeather.weather]}</div>
          <div>온도:{cityWeather.temp}</div>
        </WeatherContainer>
      ) : null}
    </>
  );
};

export default Weather;
