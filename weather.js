#!usr/bin/env node
import { argsLogger } from "./helpers/arguments.js";
import { logError, printSucces, printHelp } from "./services/log.service.js";
import { writeKey } from "./services/os.js";

const saveToken = async (token) => {
  try {
    await writeKey("token", token);
  } catch (error) {
    logError( error);
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
}

main();
