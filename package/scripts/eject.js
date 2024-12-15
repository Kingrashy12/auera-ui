#!/usr/bin/env node

import { logger } from "./logger.js";
import { ejectTailwind } from "./boilerplate/tailwind.ex.js";
import { ejectCss } from "./boilerplate/css.js";
import arg from "arg";
import { eject } from "./run.js";

const runScript = async () => {
  try {
    eject();
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
    ejectTailwind();
  } else {
    runScript();
  }
};

start();
