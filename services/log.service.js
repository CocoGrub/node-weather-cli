import chalk from "chalk";
import dedent from "dedent-js";

const logError = (err) => {
  console.log(chalk.bgRed(err));
};

const printSucces = (msg) => {
  console.log(chalk.bgGreen(msg));
};

const printHelp = () => {
  console.log(dedent`${chalk.bgGrey("help ")}
  w/o params - get weather
  -s [city] for weather for current city
  -h for help
  -t [api-key] for set api key
  `);
};

export { logError, printSucces, printHelp };
