export interface city {
  [city: string]: {
    name: string;
    latitude: number;
    longitude: number;
  };
}

export interface weather {
  city: string;
  weather: string;
  temp: number;
}
