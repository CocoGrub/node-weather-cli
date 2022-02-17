import https from "https";
import { TOKEN_DICTIONARY,getKey } from "./storage.service.js";

const getWeather = async (city) => {
  const token = await getKey();
  if (!token) {
    return false;
  }
  const data = "";
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("lang", "ru");
  url.searchParams.append("units", "metric");

  https.get(url, (response) => {
    let res = "";
    response.on("data", (chunk) => {
      res += chunk;
    });

    response.on("end", () => {
      console.log(res);
    });

    response.on("error", (err) => {
      console.log(err);
    });
  });

  return data;
};

export { getWeather };
