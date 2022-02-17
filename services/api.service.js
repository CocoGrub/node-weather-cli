import https from "https";
import { TOKEN_DICTIONARY, getKey } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const token = await getKey();
  if (!token) {
    return false;
  }

  const {data} = await axios.get(
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
