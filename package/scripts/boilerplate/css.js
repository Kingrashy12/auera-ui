import { logger } from "../logger.js";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

export const filename__ = fileURLToPath(import.meta.url);
export const dirname__ = dirname(filename__);

export const ejectCss = async () => {
  try {
    const sourcePath = path.resolve(dirname__, "../../dist/auera.css");
    const content = readFileSync(sourcePath, "utf-8");
    const formattedCss = await prettier.format(content, {
      parser: "css",
    });
    // Check for src or app directory
    const srcPath = existsSync(path.join(process.cwd(), "src"))
      ? path.join(process.cwd(), "src")
      : path.join(process.cwd(), "app");

    const stylePath = existsSync(srcPath)
      ? path.join(srcPath, "styles")
      : path.join(process.cwd(), "styles");

    const cssFile = path.join(stylePath, "auera.css");

    //Create the stylePath if it does not exits
    if (!existsSync(stylePath)) {
      mkdirSync(stylePath, { recursive: true });
      logger.success("✔ Created styles directory");
    }

    writeFileSync(cssFile, formattedCss);
    logger.success("✔ Added auera.css");
  } catch (error) {
    logger.error(`Error ejecting file: ${error.message}`);
  }
};
