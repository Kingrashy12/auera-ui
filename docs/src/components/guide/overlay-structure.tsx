import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import CodeTag from "../CodeTag";
import HeaderLabel from "../HeaderLabel";
import CodeBlock from "../layout/code/Block";
import { overlayCodes } from "@/data/code/usage.overlay";
import { useDocState } from "@/hooks/docs";

const OverlayStructure = () => {
  const { lang } = useDocState();
  return (
    <>
      <StepGuide step={1} id="overlay-component">
        <GuideContainer
          direction="column"
          id="overlay-component"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel
            id="overlay-component"
            as="h3"
            className="text-lg"
            hideLink
          >
            Overlay Component
          </HeaderLabel>
          <p className="text">
            Below is an example of how you should structure your overlays.
          </p>
          <CodeBlock
            fileName="components/overlays/auth.tsx"
            lg="tsx"
            code={overlayCodes.componentFile}
          />
        </GuideContainer>
      </StepGuide>

      <StepGuide step={2} id="create-file">
        <GuideContainer
          direction="column"
          id="create-file"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel id="create-file" as="h3" className="text-lg" hideLink>
            Create File
          </HeaderLabel>
          <p className="text">
            Create a single file, such as{" "}
            <CodeTag>overlays/container.{lang.ext}</CodeTag> and import all the
            overlay components into it.
          </p>
          <CodeBlock
            fileName="components/overlays/container.tsx"
            lg="tsx"
            code={overlayCodes.container}
          />
        </GuideContainer>
      </StepGuide>

      <StepGuide step={3} id="import" removeTrack>
        <GuideContainer
          direction="column"
          id="import"
          fullWidth
          className="gap-4"
        >
          <HeaderLabel id="import" as="h3" className="text-lg" hideLink>
            Import Components
          </HeaderLabel>
          <p className="text">
            Import the newly created Overlays Component from{" "}
            <CodeTag>overlays/container.tsx</CodeTag> into your root layout or{" "}
            <CodeTag>App.tsx</CodeTag>.
          </p>
          <CodeBlock
            fileName="layout.tsx"
            lg="tsx"
            code={overlayCodes.layout}
          />
          <p className="text">
            This approach simplifies imports and centralizes overlay management.
          </p>
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default OverlayStructure;
