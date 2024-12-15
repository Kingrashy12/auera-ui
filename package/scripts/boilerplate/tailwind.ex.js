import { existsSync, writeFileSync } from "fs";
import { logger } from "../logger.js";
import { join } from "path";
import { fetchFile } from "./config.js";

export const ejectTailwind = async () => {
  const isTypeScript = existsSync(join(process.cwd(), "tsconfig.json"));
  const fileName = `✔ Created tailwind.extend${isTypeScript ? ".ts" : ".js"}`;
  try {
    const file = await fetchFile(fileName);
    writeFileSync(
      isTypeScript ? "./tailwind.extend.ts" : "./tailwind.extend.js",
      file
    );
  } catch (error) {
    logger.error(error);
  }
};
