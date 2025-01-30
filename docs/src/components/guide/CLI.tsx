import React from "react";
import StepGuide from "../StepGuide";
import GuideContainer from "../layout/GuideContainer";
import HeaderLabel from "../HeaderLabel";
import Bash from "../layout/code/Bash";
import CodeBlock from "../layout/code/Block";
import { ejectedCodes } from "@/data/code/cli";
import CodeTag from "../CodeTag";

const CLI = () => {
  return (
    <>
      <StepGuide step={1} id="run-the-eject-command">
        <GuideContainer>
          <HeaderLabel id="run-the-eject-command" as="h3" hideLink>
            Run the Eject Command
          </HeaderLabel>
          <p className="text">
            Use the following command to view all available eject options:
          </p>
          <Bash code="npx auera-ui eject" />
          <p className="text">
            You will be prompted to select what you want to eject:
          </p>
          <Bash
            code={`What do you want to eject?
│  ● auera.css
│  ○ tailwind.extend.ts
          `}
          />
        </GuideContainer>
      </StepGuide>
      <StepGuide step={2} id="use-specific-eject-flags">
        <GuideContainer>
          <HeaderLabel id="use-specific-eject-flags" as="h3" hideLink>
            Use Specific Eject Flags
          </HeaderLabel>
          <p className="text">
            Add the appropriate flag to the eject command to target specific
            files:
          </p>
          <ul className="text font-inter list-disc pl-4 gap-4 flex flex-col">
            <li>
              <CodeTag>--css</CodeTag>: Ejects the default{" "}
              <CodeTag>auera.css</CodeTag> file, allowing you to modify
              AueraUI&apos;s global styles.
            </li>
          </ul>
          <Bash code="npx auera-ui eject --css" />
          <ul className="text font-inter list-disc pl-4 gap-4 flex flex-col">
            <li>
              <CodeTag>--config</CodeTag>: Ejects the{" "}
              <CodeTag>tailwind.extend.ts</CodeTag> file, enabling you to
              customize Tailwind&apos;s extended configuration.
            </li>
          </ul>
          <Bash code="npx auera-ui eject --config" />
        </GuideContainer>
      </StepGuide>
      <StepGuide step={3} id="locate-the-ejected-files">
        <GuideContainer>
          <HeaderLabel id="locate-the-ejected-files" as="h3" hideLink>
            Locate the Ejected Files
          </HeaderLabel>
          <ul className="text font-inter list-disc pl-4 gap-4 flex flex-col">
            <li className="leading-loose">
              {" "}
              The <CodeTag>--css</CodeTag> flag generates the{" "}
              <CodeTag>auera.css</CodeTag> file, typically in a designated
              directory (e.g., <CodeTag>src/styles/</CodeTag>).
            </li>
            <li className="max-[550px]:leading-loose">
              {" "}
              The <CodeTag>--config</CodeTag> flag generates the{" "}
              <CodeTag>tailwind.extend.ts</CodeTag> file, usually in the root
              directory.
            </li>
          </ul>
        </GuideContainer>
      </StepGuide>
      <StepGuide step={4} id="customize-the-ejected-files">
        <GuideContainer>
          <HeaderLabel id="customize-the-ejected-files" as="h3" hideLink>
            Customize the Ejected Files
          </HeaderLabel>
          <p className="text">
            Open the ejected files and modify them as needed to suit your
            application’s design.
          </p>
          <h4 className="text-primary font-inter font-semibold">
            Example (<CodeTag>auera.css</CodeTag>):
          </h4>
          <CodeBlock fileName="auera.css" lg="css" code={ejectedCodes.css} />
          <h4 className="text-primary font-inter font-semibold">
            Example (<CodeTag>tailwind.extend.ts</CodeTag>):
          </h4>
          <CodeBlock
            fileName="tailwind.extend.ts"
            lg="ts"
            code={ejectedCodes.config}
          />
        </GuideContainer>
      </StepGuide>
      <StepGuide removeTrack step={5} id="update import">
        <GuideContainer>
          <HeaderLabel id="update import" as="h3" hideLink>
            Update import
          </HeaderLabel>
          <p className="text">
            After customizing, ensure the changes are reflected in your project
            by replacing the previously imported files with the ejected
            versions.
          </p>
          <code className="cb w-fit block">global.css</code>
          <CodeBlock
            fileName="global.css"
            lg="css"
            code={`/* Replace this */
@import 'auera-ui/dist/auera.css';

/* With */
@import './auera.css';`}
          />
          <code className="cb w-fit block">tailwind.extend.ts</code>
          <CodeBlock
            fileName="tailwind.config.ts"
            lg="ts"
            code={`/* Replace this */
import { tailwindExtend } from "auera-ui";

/* With */
import { tailwindExtend } from "./tailwind.extend";`}
          />
          <p className="text">
            This process ensures flexibility and empowers you to take full
            control of your design, aligning with AueraUI’s focus on
            customization and adaptability.
          </p>
        </GuideContainer>
      </StepGuide>
    </>
  );
};

export default CLI;
