import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import HeaderLabel from "../HeaderLabel";
import CodeBlock from "../layout/code/Block";
import { Box } from "auera-ui";
import { installationCodes } from "@/data/code/installation";

const Installation = () => {
  return (
    <>
      <StepGuide step={1}>
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
          <CodeBlock code={`npm install auera-ui react-icons`} lg="bash" />
        </GuideContainer>
      </StepGuide>
      <StepGuide step={2}>
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
            Wrap your application with the{" "}
            <span className="code-block">Provider</span> component.
          </p>
          <p className="text">This Provider compose the following:</p>
          <Box className="gap-3" wrap>
            <span className="code-block">ThemeProvider</span>
            <span className="code-block">ModalProvider</span>
            <span className="code-block">DrawerProvider</span>
          </Box>
          <CodeBlock code={installationCodes.provider} lg="ts" />
        </GuideContainer>
      </StepGuide>
      <StepGuide step={3}>
        <GuideContainer
          direction="column"
          id="update-config"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel id="update-config" as="h3" className="text-lg" hideLink>
            Update Config
          </HeaderLabel>
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default Installation;
