#!/usr/bin/env node

import inquirer from "inquirer";
import { logger } from "./logger.js";
import { ejectTailwind } from "./boilerplate/tailwind.ex.js";
import { ejectCss } from "./boilerplate/css.js";

inquirer
  .prompt({
    name: "eject opt",
    type: "list",
    message: "What do you want to eject?",
    choices: ["auera.css", "tailwind.extend.ts"],
  })
  .then((ans) => {
    if (ans["eject opt"] === "auera.css") {
      logger.info("Ejecting CSS...");
      ejectCss();
    } else if (ans["eject opt"] === "tailwind.extend.ts") {
      logger.info("Ejecting Tailwind configuration...");
      ejectTailwind();
    }
  })
  .catch(() => logger.warning("Eject operation canceled."));
