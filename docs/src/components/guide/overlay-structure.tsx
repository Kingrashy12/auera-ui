import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import CodeTag from "../CodeTag";

const OverlayStructure = () => {
  return (
    <>
      <StepGuide step={1} id="create-file">
        <GuideContainer
          direction="column"
          id="create-file"
          fullWidth
          className="gap-4"
        >
          Create a single file, such as <CodeTag>overlays/container.js</CodeTag>{" "}
          or <CodeTag>overlays/container.tsx</CodeTag>
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default OverlayStructure;
