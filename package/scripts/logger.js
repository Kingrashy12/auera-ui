import chalk from "chalk";

export const logger = {
  log: (...args) => console.log(chalk.gray(...args)),
  info: (...args) => console.log(chalk.blueBright(...args)),
  warning: (...args) => console.log(chalk.yellow(...args)),
  error: (...args) => console.log(chalk.redBright(...args)),
  success: (...args) => console.log(chalk.green(...args)),
  highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
  bright: (...args) => console.log(chalk.white(...args)),
  debug: console.log,
};
