#!/usr/bin/env node

import { ejectTailwind } from "./boilerplate/tailwind.ex.js";
import { ejectCss } from "./boilerplate/css.js";
import arg from "arg";
import { eject } from "./run.js";
import { log } from "@clack/prompts";

const runScript = async () => {
  try {
    eject();
  } catch (error) {
    log.error(`Eject operation canceled: ${error.message}`);
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
    ejectCss();
  } else if (args["--config"]) {
    ejectTailwind();
  } else {
    runScript();
  }
};

start();
