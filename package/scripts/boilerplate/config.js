const fileUrl =
  "https://raw.githubusercontent.com/Kingrashy12/auera-ui/main/package/src/utils/tailwind.extend.ts";

let fetching = false;

const showProcess = async () => {
  let spinnerFrames = ["|", "/", "-", "\\"];
  let currentFrame = 0;

  let sign = "";

  while (fetching) {
    sign = `\r${spinnerFrames[currentFrame]}`;
    process.stdout.write(sign);
    currentFrame = (currentFrame + 1) % spinnerFrames.length;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  spinnerFrames = "";
  sign = "";
  currentFrame = null;
};

export const fetchFile = async () => {
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
  }
};
