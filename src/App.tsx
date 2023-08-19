import React, { useState } from "react";
import Input from "./Input";
import Weather from "./Weather";
import { weather } from "./model/data";

const App: React.FC = () => {
  //함수형 컴포넌트타입으로 지정해줌
  const [cityWeather, setCityWeather] = useState<weather>({
    city: "",
    weather: "",
    temp: 0,
  });
  return (
    <div>
      <Input setter={setCityWeather} />
      <Weather cityWeather={cityWeather} />
    </div>
  );
};

export default App;
