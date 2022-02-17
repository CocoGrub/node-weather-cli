import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const filePath = join(homedir(), "weather.data.json");

const writeKey = async (type, value) => {
  if (await isExist()) {
    await getKey();
  }
  const data = await getKey();
  data[type] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKey = async () => {
  try {
    const data = await promises.readFile(filePath);
    const obj = await JSON.parse(data);
    return obj;
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
