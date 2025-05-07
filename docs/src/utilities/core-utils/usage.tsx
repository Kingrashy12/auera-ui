import CodeTag from "@/components/CodeTag";
import DashedBorder from "@/components/dashedBorder";
import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import CodeBlock from "@/components/layout/code/Block";
import TabLayout from "@/components/layout/TabLayout";
import TabLink from "@/components/TabLink";
import { Box, Button, openDrawer, openModal, Stack } from "auera-ui";
import React from "react";

const CoreUtilsUsage = () => {
  return (
    <Box className="flex-col gap-10">
      <Details id="open-modal">
        <HeaderLabel id="open-modal" as="h3">
          <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
            openModal
          </CodeTag>
        </HeaderLabel>
        <p className="text">
          A Utility function used for opening modal components
        </p>
        <p className="font-medium font-inter text-primary">Parameters:</p>
        <ul className="text-primary font-inter list-disc pl-5">
          <li className="text-primary">
            <CodeTag>value: string</CodeTag> – A unique identifier used to
            control modal visibility.
          </li>
        </ul>
        <p className="font-medium font-inter text-primary">Usage:</p>
        <TabLayout code={openCode} fileName="demo.ts">
          <Stack>
            <Button onClick={() => openModal("form-modal")}>Login</Button>
          </Stack>
        </TabLayout>
      </Details>
      <DashedBorder />
      <Details id="close-modal">
        <HeaderLabel id="close-modal" as="h3">
          <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
            closeModal
          </CodeTag>
        </HeaderLabel>
        <p className="text">
          A Utility function used for closing modal components
        </p>
        <p className="font-medium font-inter text-primary">Usage:</p>
        <CodeBlock fileName="demo.ts" code={closeCode} />
      </Details>
      <DashedBorder />
      <Details id="open-drawer">
        <HeaderLabel id="open-drawer" as="h3">
          <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
            openDrawer
          </CodeTag>
        </HeaderLabel>
        <p className="text">
          A Utility function that opens a drawer component.
        </p>
        <p className="font-medium font-inter text-primary">Parameters:</p>
        <ul className="text-primary font-inter list-disc pl-5">
          <li className="text-primary">
            <CodeTag>value: string</CodeTag> – A unique identifier used to
            control drawer visibility.
          </li>
        </ul>
        <p className="font-medium font-inter text-primary">Usage:</p>
        <TabLayout code={openDCode} fileName="demo.ts">
          <Stack>
            <Button onClick={() => openDrawer("drawer-demo")}>
              View Notifications
            </Button>
          </Stack>
        </TabLayout>
      </Details>
      <DashedBorder />
      <Details id="close-drawer">
        <HeaderLabel id="close-drawer" as="h3">
          <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
            closeDrawer
          </CodeTag>
        </HeaderLabel>
        <p className="text">
          A Utility function used for closing an open drawer.
        </p>
        <p className="font-medium font-inter text-primary">Usage:</p>
        <CodeBlock fileName="demo.ts" code={closeDCode} />
      </Details>
      <DashedBorder />
      <Details id="handle-file-upload">
        <HeaderLabel id="handle-file-upload" as="h3">
          <CodeTag className="text-base p-[3px_8px_3px_8px] rounded-sm bg-[var(--cb)] border-border">
            handleFileUpload
          </CodeTag>
        </HeaderLabel>
        <p className="text">
          Handles file extraction from <CodeTag>onFileUpload</CodeTag> prop on{" "}
          <TabLink label="FileUpload" to="/docs/components/file-upload" />{" "}
          component.
        </p>
        <p className="font-medium font-inter text-primary">Parameters:</p>
        <ul className="text-primary font-inter list-disc pl-5">
          <li className="text-primary">
            <CodeTag>{"callback: (file: File) => void"}</CodeTag> – Function to
            execute with the selected file.
          </li>
        </ul>
        <p className="font-medium font-inter text-primary">Usage:</p>
        <CodeBlock code={fileUpload} fileName="demo.ts" />
      </Details>
    </Box>
  );
};

export default CoreUtilsUsage;

const openCode = `import { openModal, Button } from "auera-ui";

<Button onClick={() => openModal("form-modal")}>Login</Button>`;
const openDCode = `import { openDrawer, Button } from "auera-ui";

<Button onClick={() => openDrawer("drawer-demo")}>
  View Notifications
</Button>`;
const closeCode = `import { closeModal } from "auera-ui";

closeModal()`;
const closeDCode = `import { closeDrawer } from "auera-ui";

closeDrawer()`;

const fileUpload = `import { handleFileUpload, FileUpload } from "auera-ui";

const handleFile = handleFileUpload((file) => {
  // Extract main file and base64 data if a single file is uploaded
  const mainFile = Array.isArray(file) ? null : file.main;
  const base64File = Array.isArray(file) ? null : file.base64;

  // Store multiple files in an array
  const fileArray = Array.isArray(file) ? file : [];

  console.log(mainFile, base64File, fileArray);
});


// Pass it as a prop to the FileUpload component
<FileUpload onFileUpload={handleFile}>
  {/* Other file upload components */}
</FileUpload>
`;
