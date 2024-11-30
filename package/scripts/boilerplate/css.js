import { logger } from "../logger.js";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { cssTemp } from "./file.css.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ejectCss = () => {
  try {
    const sourcePath = path.resolve(__dirname, "../../dist/auera.css");
    // Check for src or app directory
    const srcPath = existsSync(path.join(process.cwd(), "src"))
      ? path.join(process.cwd(), "src")
      : path.join(process.cwd(), "app");

    const stylePath = existsSync(srcPath)
      ? path.join(srcPath, "styles")
      : path.join(process.cwd(), "styles");

    // const stylePath = path.join(process.cwd(), "/styles");

    const cssFile = path.join(stylePath, "auera.css");

    //Create the stylePath if it does not exits
    if (!existsSync(stylePath)) {
      mkdirSync(stylePath, { recursive: true });
      logger.success("✔ Created styles directory");
    }

    // Copy CSS From dist into styles/auera.css
    writeFileSync(cssFile, cssTemp);
    logger.success("✔ Added auera.css");
  } catch (error) {
    logger.warning(`⚠️  Error ejecting file: ${error.message}`);
  }
};
