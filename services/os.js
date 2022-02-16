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

const filePath = join(homedir(), "weather.data.json");
function testPath() {
  console.log(filePath);
  console.log(homedir()); // C:\Users\user
  console.log(dirname(filePath)); // C:\Users\user
  console.log(basename(filePath)); // weather.data.json
  console.log(basename(homedir())); // user
  console.log(extname(filePath)); // .json
  console.log(relative(filePath, dirname(filePath))); // .json
  console.log(isAbsolute(filePath)); //true
  console.log(resolve("..")); // D:\webProjects\node
  console.log(sep); // \
}

const writeKey = async (key, value) => {

  if (await isExist()) {
    
    await getKey(key);
  }
  
  const data = {};
  data[key] = value;
  await promises.writeFile("data.json", JSON.stringify(data));
};

const getKey = async (key) => {
  const data = await promises.readFile("data.json");
  const obj = await JSON.parse(data);
  return obj.token;
};

const isExist = async () => {
  try {
    await promises.stat("data.json");
    return true;
  } catch (error) {
    return false;
  }
};

export { writeKey };
