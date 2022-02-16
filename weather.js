#!usr/bin/env node
import { argsLogger } from "./helpers/arguments.js";
import { logError, printSucces, printHelp } from "./services/log.service.js";

function main() {
  console.log(argsLogger(process.argv));
  const args = argsLogger(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    printSucces();
  }
  if (args.t) {
  }
}

main();
