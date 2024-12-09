#!/usr/bin/env node

import { logger } from "./logger.js";

const args = process.argv.slice(2);

if (args[0] === "eject") {
  import("./eject.js")
    .then((module) => {
      module;
    })
    .catch((error) => {
      logger.warning("Error loading eject script:", error);
    });
} else {
  logger.bright(`
Usage: npx auera-ui <command>

Commands:
  eject Eject files from AueraUI
`);
}
