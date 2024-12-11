#!/usr/bin/env node

import inquirer from "inquirer";
import { logger } from "./logger.js";
import { ejectTailwind } from "./boilerplate/tailwind.ex.js";
import { ejectCss } from "./boilerplate/css.js";
import arg from "arg";

const runScript = async () => {
  try {
    const { ejectOpt } = await inquirer.prompt([
      {
        name: "ejectOpt",
        type: "list",
        message: "What do you want to eject?",
        choices: ["auera.css", "tailwind.extend.ts"],
      },
    ]);

    if (ejectOpt === "auera.css") {
      logger.info("Ejecting CSS...");
      ejectCss();
    } else if (ejectOpt === "tailwind.extend.ts") {
      logger.info("Fetching Tailwind configuration...");
      ejectTailwind();
    }
  } catch (error) {
    logger.warning(`Eject operation canceled: ${error.message}`);
  }
};

const parseArgs = () => {
  return arg({
    "--css": Boolean,
    "--config": Boolean,
  });
};

const start = () => {
  const args = parseArgs();

  if (args["--css"]) {
    logger.info("Ejecting CSS...");
    ejectCss();
  } else if (args["--config"]) {
    logger.info("Fetching Tailwind configuration...");
    ejectTailwind();
  } else {
    runScript();
  }
};

start();
