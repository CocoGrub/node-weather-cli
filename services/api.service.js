import axios from "axios";
import { getKey } from "./storage.service.js";

const getWeather = async () => {
  const { token, city } = await getKey();

  console.log(token, city);
  if (!(token && city)) {
    return false;
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  console.log(data);

  return data;
};

export { getWeather };
