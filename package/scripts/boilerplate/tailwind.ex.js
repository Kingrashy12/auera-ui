import { existsSync, writeFileSync } from "fs";
import { logger } from "../logger.js";
import { join } from "path";
import { fetchFile } from "./config.js";

export const ejectTailwind = async () => {
  const isTypeScript = existsSync(join(process.cwd(), "tsconfig.json"));
  try {
    const file = await fetchFile();
    writeFileSync(
      isTypeScript ? "./tailwind.extend.ts" : "./tailwind.extend.js",
      file
    );
    logger.success(`✔ Created tailwind.extend${isTypeScript ? ".ts" : ".js"}`);
  } catch (error) {
    logger.error(error);
  }
};
