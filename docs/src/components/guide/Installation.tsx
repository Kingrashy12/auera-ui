import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import HeaderLabel from "../HeaderLabel";
import CodeBlock from "../layout/code/Block";

import { installationCodes } from "@/data/code/installation";
import Bash from "../layout/code/Bash";

const Installation = () => {
  return (
    <>
      <StepGuide step={1} id="install-auera-ui">
        <GuideContainer
          direction="column"
          id="install-auera-ui"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel
            id="install-auera-ui"
            as="h3"
            className="text-lg"
            hideLink
          >
            Install <span className="code-block text-base">auera-ui</span>
          </HeaderLabel>
          <Bash code="npm install auera-ui react-icons" />
        </GuideContainer>
      </StepGuide>
      <StepGuide step={2} id="setup-provider">
        <GuideContainer
          direction="column"
          id="setup-provider"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel id="setup-provider" as="h3" className="text-lg" hideLink>
            Setup Provider
          </HeaderLabel>
          <p className="text">
            It is essential to add the{" "}
            <span className="code-block">Provider</span> at the root of your
            application.
          </p>
          <p className="text">
            The <span className="code-block">Provider</span> component serves as
            the global state manager for AueraUI
          </p>

          <CodeBlock
            code={installationCodes.provider}
            lg="ts"
            fileName="layout.tsx"
          />
          <p className="text">
            By wrapping your app with{" "}
            <span className="code-block">Provider</span>, the following global
            features will be automatically applied:
          </p>
          <ul className="text font-inter list-disc pl-3 gap-4 flex flex-col">
            <li>
              <span className="code-block">ThemeProvider</span>: Manages the
              global theme for your application.
            </li>
            <li>
              <span className="code-block">ModalProvider</span>: Manages modal
              dialogs and their visibility.
            </li>
            <li>
              <span className="code-block">DrawerProvider</span>: Manages side
              drawers in your application.
            </li>
          </ul>
        </GuideContainer>
      </StepGuide>
      <StepGuide step={3} id="update-tailwind-config">
        <GuideContainer
          direction="column"
          id="update-tailwind-config"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel
            id="update-tailwind-config"
            as="h3"
            className="text-lg"
            hideLink
          >
            Update{" "}
            <span className="code-block text-[15px]">tailwind.config.ts</span>
          </HeaderLabel>
          <p className="text">
            Next, update your Tailwind configuration to include AueraUI&apos;s
            extended properties. This ensures that animations and styles are
            applied correctly.
          </p>
          <CodeBlock
            code={installationCodes.config}
            lg="ts"
            fileName="tailwind.config.ts"
          />
          <p className="text">
            Then in your <span className="code-block">global.css</span> or{" "}
            <span className="code-block">index.css</span>, add this:
          </p>
          <CodeBlock
            code="@import 'auera-ui/dist/auera.css';"
            lg="css"
            fileName="global.css"
          />
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default Installation;
