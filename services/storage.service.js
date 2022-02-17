import { homedir } from "os";
import {
  basename,
  dirname,
  extname,
  join,
  relative,
  isAbsolute,
  resolve,
  sep,
} from "path";
import { promises } from "fs";

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const filePath = join(homedir(), "weather.data.json");

const writeKey = async (key, value) => {
  if (await isExist()) {
    await getKey(key);
  }

  const data = {};
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKey = async () => {
  try {
    const data = await promises.readFile(filePath);
    const obj = await JSON.parse(data);
    return obj.token;
  } catch (error) {
    return false;
  }
};

const isExist = async () => {
  try {
    await promises.stat(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

export { writeKey, getKey, TOKEN_DICTIONARY };
