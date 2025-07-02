import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import HeaderLabel from "../HeaderLabel";
import CodeBlock from "../layout/code/Block";

import { installationCodes } from "@/data/code/installation";
import CodeTag from "../CodeTag";
import Terminal from "../layout/code/terminal";
import { useDocState } from "@/hooks/docs";

const Installation = () => {
  const {
    lang: { ext },
  } = useDocState();
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
            Install{" "}
            <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
              auera-ui
            </CodeTag>
          </HeaderLabel>

          <Terminal
            cmds={["npm", "yarn", "pnpm"]}
            script={[
              "install auera-ui react-icons",
              "add auera-ui react-icons",
              "add auera-ui react-icons",
            ]}
          />
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
            It is essential to add the <CodeTag>Provider</CodeTag> at the root
            of your application.
          </p>
          <p className="text">
            The <CodeTag>Provider</CodeTag> component serves as the global state
            manager for AueraUI
          </p>

          <CodeBlock
            code={
              ext === "tsx"
                ? installationCodes.provider
                : installationCodes.provider_jsx
            }
            lg="ts"
            fileName="layout.tsx"
          />
          <p className="text">
            By wrapping your app with <CodeTag>Provider</CodeTag>, the following
            global features will be automatically applied:
          </p>
          <ul className="text font-inter list-disc pl-3 gap-4 flex flex-col">
            <li>
              <CodeTag>ThemeProvider</CodeTag>: Manages the global theme for
              your application.
            </li>
            <li>
              <CodeTag>ModalProvider</CodeTag>: Manages modal dialogs and their
              visibility.
            </li>
            <li>
              <CodeTag>DrawerProvider</CodeTag>: Manages side drawers in your
              application.
            </li>
            <li>
              <CodeTag>Toaster</CodeTag>: Renders and manages toast
              notifications. Required for displaying toast messages.
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
            <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
              tailwind.config.ts
            </CodeTag>
          </HeaderLabel>
          <p className="text">
            Next, update your Tailwind configuration to include AueraUI&apos;s
            extended properties. This ensures that animations and styles are
            applied correctly.
          </p>
          <CodeBlock
            code={
              ext === "tsx"
                ? installationCodes.config
                : installationCodes.config_js
            }
            lg="ts"
            fileName="tailwind.config.ts"
          />
          <p className="text">
            Then in your <CodeTag>global.css</CodeTag> or{" "}
            <CodeTag>index.css</CodeTag>, add this:
          </p>
          <CodeBlock
            code="@import 'auera-ui/auera.css';"
            lg="css"
            fileName="global.css"
          />
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default Installation;
