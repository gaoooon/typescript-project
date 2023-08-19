import React, { useState, useEffect } from "react";
import { city, weather } from "./model/data";

const API_KEY = "848ba02eb6c70e2710754c299271f149";

const cities: city = {
  서울: {
    name: "서울",
    latitude: 37.5665,
    longitude: 126.978,
  },
  부산: {
    name: "부산",
    latitude: 35.1796,
    longitude: 129.0756,
  },
  대구: {
    name: "대구",
    latitude: 35.8714,
    longitude: 128.6014,
  },
  광주: {
    name: "광주",
    latitude: 35.1595,
    longitude: 126.8526,
  },
  인천: {
    name: "인천",
    latitude: 37.4563,
    longitude: 126.7052,
  },
  대전: {
    name: "대전",
    latitude: 36.3504,
    longitude: 127.3845,
  },
  수원: {
    name: "수원",
    latitude: 37.2636,
    longitude: 127.0286,
  },
  울산: {
    name: "울산",
    latitude: 35.5384,
    longitude: 129.3114,
  },
  용인: {
    name: "용인",
    latitude: 37.2411,
    longitude: 127.1777,
  },
};

interface props {
  setter: React.Dispatch<React.SetStateAction<weather>>;
}

const Input: React.FC<props> = ({ setter }) => {
  const [inputValue, setInputValue] = useState("");
  const [locationData, setLocationData] = useState({
    name: "",
    latitude: 0,
    longitude: 0,
  });

  const inputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cityName = (
      (e.target as HTMLFormElement).firstChild as HTMLFormElement
    ).value;
    if (cities[cityName] !== undefined) {
      setLocationData(cities[cityName]);
    }
  };

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&appid=${API_KEY}&units=metric`
    )
      .then((response: any) => response.json())
      .then((data: any) => {
        console.log(data);
        const weatherType = {
          city: locationData.name,
          weather: data.weather[0].main,
          temp: data.main.temp,
        };
        setter(weatherType);
        setInputValue("");
      });
  };

  useEffect(() => {
    if (locationData.name !== "") {
      fetchWeather();
    }
  }, [locationData]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" value={inputValue} onChange={inputChnage} />
        <button>click!</button>
      </form>
    </div>
  );
};

export default Input;
