#!usr/bin/env node
import { argsLogger } from "./helpers/arguments.js";
import { logError, printSucces, printHelp } from "./services/log.service.js";
import {
  writeKey,
  getKey,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    const key = await getKey(); // если передана пустая строка, но токен в файле есть, то ...
    if (key) {
      printSucces(key);
      return;
    }
    logError("не передан токен");
    return;
  }
  try {
    await writeKey(TOKEN_DICTIONARY.token, token);
    printSucces("токен сохранен");
  } catch (error) {
    logError(error);
  }
};

async function main() {
  console.log(argsLogger(process.argv));
  const args = argsLogger(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSucces();
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather("moscow");
}

main();
