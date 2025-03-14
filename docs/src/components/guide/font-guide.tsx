import { Box } from "auera-ui";
import React from "react";
import Terminal from "../layout/code/terminal";
import CodeBlock from "../layout/code/Block";
import Details from "../Details";
import HeaderLabel from "../HeaderLabel";
import CodeTag from "../CodeTag";

const FontGuide = () => {
  return (
    <Box className="flex-col gap-5">
      <Terminal
        cmds={["npm", "yarn", "pnpm"]}
        script={[
          "install @fontsource/inter",
          "add @fontsource/inter",
          "add @fontsource/inter",
        ]}
      />
      <p className="text">Then, import it in your project:</p>
      <CodeBlock
        fileName="global.css"
        code='@import "@fontsource/inter"'
        lg="css"
      />
      <Details id="using-google-web-fonts">
        <HeaderLabel id="using-google-web-fonts" as="h3">
          Using Google Web Fonts
        </HeaderLabel>
        <p className="text">
          If you prefer <b>Google Fonts (CDN)</b> instead of installing{" "}
          <CodeTag> @fontsource/inter</CodeTag>, include the following to your{" "}
          <CodeTag>global.css</CodeTag>.
        </p>
        <CodeBlock
          fileName="global.css"
          code="@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');"
          lg="css"
        />
      </Details>
    </Box>
  );
};
// Using Google Web Fonts

export default FontGuide;

// export const CDNUsage = () => {
//     return (

//     )
// }
