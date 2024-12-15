import { spinner } from "@clack/prompts";
import chalk from "chalk";

const s = spinner();

const fileUrl =
  "https://raw.githubusercontent.com/Kingrashy12/auera-ui/main/package/src/utils/tailwind.extend.ts";

let fetching = false;

const showProcess = async () => {
  if (fetching) s.start("Fetching Tailwind configuration...");
};

export const fetchFile = async (fileName) => {
  try {
    fetching = true;
    showProcess();
    const res = await fetch(fileUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch file. Status: ${res.status}`);
    }
    const data = await res.text();
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  } finally {
    fetching = false;
    s.stop(chalk.greenBright(fileName));
  }
};
