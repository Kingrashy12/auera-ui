import { intro, select, isCancel, cancel } from "@clack/prompts";
import { ejectTailwind } from "./boilerplate/tailwind.ex.js";
import { ejectCss } from "./boilerplate/css.js";

intro(`auera-ui cli`);

const canceled = (value) => {
  if (isCancel(value)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }
};

export async function eject() {
  const projectType = await select({
    message: "What do you want to eject?",
    options: [
      { value: "css", label: "auera.css" },
      { value: "config", label: "tailwind.extend.ts" },
    ],
  });

  canceled(projectType);

  if (projectType === "css") {
    ejectCss();
  } else {
    ejectTailwind();
  }
}
