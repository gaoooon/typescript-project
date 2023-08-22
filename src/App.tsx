import React, { useState } from "react";
import Input from "./Input/index";
import Weather from "./Weather/index";
import { WeatherForm } from "./model/data";
import { GlobalStyle } from "./resetCss";
import { Style } from "./style";

const App: React.FC = () => {
  //함수형 컴포넌트타입으로 지정해줌
  const [cityWeather, setCityWeather] = useState<WeatherForm>({
    city: "",
    weather: "",
    temp: 0,
  });
  return (
    <>
      <Style />
      <GlobalStyle />
      <div>
        <Input setter={setCityWeather} />
        <Weather cityWeather={cityWeather} />
      </div>
    </>
  );
};

export default App;
