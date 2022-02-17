#!usr/bin/env node
import { argsLogger } from "./helpers/arguments.js";
import { logError, printSucces, printHelp } from "./services/log.service.js";
import {
  writeKey,
  getKey,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveData = async (type, data) => {
  console.log(data, "key");
  if (!data.length) {
    const key = await getKey(type); // если передана пустая строка, но токен в файле есть, то ...

    if (key) {
      printSucces(key);

      return;
    }

    logError("не передан токен");
    return;
  }

  try {
    await writeKey(TOKEN_DICTIONARY[type], data);
    printSucces("токен сохранен");
  } catch (error) {
    logError(error);
  }
};

const foreCast = async () => {
  try {
    const weather = await getWeather();
    console.log(weather, "weather");
  } catch (error) {
    if (error?.response?.status === 404) logError("укажите верный город");
    if (error?.response?.status === 401) logError("неверно указан токен");
    else logError(error);
  }
};

async function main() {
  const args = argsLogger(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSucces();
  }
  if (args.c) {
    return saveData(TOKEN_DICTIONARY.city, args.c);
  }
  if (args.t) {
    return saveData(TOKEN_DICTIONARY.token, args.t);
  }
  await foreCast();
}

main();
