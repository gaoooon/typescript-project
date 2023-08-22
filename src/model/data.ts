export interface City {
  [city: string]: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

export interface WeatherForm {
  city: string;
  weather: string;
  temp: number;
}

export interface WeatherType {
  [weather: string]: string;
}

export interface LocationType {
  name: string;
  latitude: number;
  longitude: number;
}
