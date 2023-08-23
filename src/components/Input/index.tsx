import React, { useState, useEffect, useRef } from "react";
import { City, WeatherForm, LocationType } from "../../model/data";
import { InputContainer } from "./style";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const cities: City = {
  서울: { name: "서울", latitude: 37.5665, longitude: 126.978 },
  부산: { name: "부산", latitude: 35.1796, longitude: 129.0756 },
  대구: { name: "대구", latitude: 35.8714, longitude: 128.6014 },
  광주: { name: "광주", latitude: 35.1595, longitude: 126.8526 },
  인천: { name: "인천", latitude: 37.4563, longitude: 126.7052 },
  대전: { name: "대전", latitude: 36.3504, longitude: 127.3845 },
  수원: { name: "수원", latitude: 37.2636, longitude: 127.0286 },
  울산: { name: "울산", latitude: 35.5384, longitude: 129.3114 },
  용인: { name: "용인", latitude: 37.2411, longitude: 127.1777 },
  부천: { name: "부천", latitude: 37.5035, longitude: 126.7661 },
  창원: { name: "창원", latitude: 35.2275, longitude: 128.6811 },
  고양: { name: "고양", latitude: 37.6584, longitude: 126.8352 },
  화성: { name: "화성", latitude: 37.1995, longitude: 126.8312 },
  성남: { name: "성남", latitude: 37.4182, longitude: 127.1269 },
  청주: { name: "청주", latitude: 36.6372, longitude: 127.4062 },
  남양주: { name: "남양주", latitude: 37.6352, longitude: 127.2147 },
  천안: { name: "천안", latitude: 36.8214, longitude: 127.1468 },
  전주: { name: "전주", latitude: 35.8242, longitude: 127.1479 },
  안산: { name: "안산", latitude: 37.3102, longitude: 126.8371 },
  평택: { name: "평택", latitude: 36.9911, longitude: 127.0856 },
  김해: { name: "김해", latitude: 35.2273, longitude: 128.8812 },
  시흥: { name: "시흥", latitude: 37.3808, longitude: 126.8021 },
  파주: { name: "파주", latitude: 37.7598, longitude: 126.792 },
  포항: { name: "포항", latitude: 36.0219, longitude: 129.3748 },
  제주: { name: "제주", latitude: 33.489, longitude: 126.4983 },
  순천: { name: "순천", latitude: 34.948, longitude: 127.4897 },
  여수: { name: "여수", latitude: 34.7604, longitude: 127.6622 },
  충주: { name: "충주", latitude: 36.9703, longitude: 127.9282 },
  경주: { name: "경주", latitude: 35.8562, longitude: 129.2242 },
};

// type, interface 항상 "PascalCase" camelCase x 둘 차이는 시작이 대문자냐 소문자냐
interface Props {
  // prop naming 아쉬움 setState prop으로 받는거면 걍 setXXXXX 이런식으로 받아오는게 더 읽기도 사용하기도 좋다.
  setCityWeather: React.Dispatch<React.SetStateAction<WeatherForm>>;
}

const Input: React.FC<Props> = ({ setCityWeather }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [locationData, setLocationData] = useState<LocationType>({
    name: "",
    latitude: 0,
    longitude: 0,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // 오타 에바
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cityName = inputRef?.current?.value ?? "";

    if (cities[cityName]) {
      setLocationData(cities[cityName]);
    } else {
      alert("개발 중 입니다...(죄...죄송합니다)");
      setInputValue("");
    }
  };

  // async await , try ... catch 사용 해보기     수정했습니다!!
  // fetch 써봤으니 axios도 사용해보기           수정했습니다!!
  const axiosWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&appid=${API_KEY}&units=metric`
      );
      const data = response.data;
      console.log(data);
      const weatherType = {
        city: locationData.name,
        weather: data.weather[0].main,
        temp: data.main.temp,
      };
      setCityWeather(weatherType);
      setInputValue("");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // "" 빈문자열은 falsy 값이라 조건을 통과하지 못할 것 같은데 확신할 순 없고 테스트 해볼게 잠만
    // 따라서 !== 제거해도 의도한대로 동작한다. 알려주셔서 감사합니다
    // falsy, truthy 값 예시들 찾아봐
    if (locationData.name) {
      axiosWeather();
    }
  }, [locationData]);

  return (
    <InputContainer>
      <form onSubmit={formSubmit}>
        <input
          placeholder="원하는 지역을 입력하세요"
          type="text"
          value={inputValue}
          onChange={inputChange}
          ref={inputRef}
        />
        <button>click!</button>
      </form>
    </InputContainer>
  );
};

export default Input;
