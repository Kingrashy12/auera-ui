import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, openModal, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ModalRadius = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Stack wrap align="horizontal">
            <Button radius="md" onClick={() => openModal("radius-md")}>
              Medium
            </Button>
            <Button radius="md" onClick={() => openModal("radius-lg")}>
              Large
            </Button>
            <Button radius="md" onClick={() => openModal("radius-xl")}>
              Extra Large
            </Button>
            <Button radius="md" onClick={() => openModal("radius-2xl")}>
              2x Large
            </Button>
            <Button radius="md" onClick={() => openModal("radius-3xl")}>
              3x Large
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock fileName="modal/radius.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalRadius;

const code = `import { Button, openModal, Stack } from "auera-ui";

export const ModalRadiusDemo = () => {
 return (
  <Stack wrap align="horizontal">
    <Button radius="md" onClick={() => openModal("radius-md")}>
      Medium
    </Button>
    <Button radius="md" onClick={() => openModal("radius-lg")}>
      Large
    </Button>
    <Button radius="md" onClick={() => openModal("radius-xl")}>
      Extra Large
    </Button>
    <Button radius="md" onClick={() => openModal("radius-2xl")}>
      2x Large
    </Button>
    <Button radius="md" onClick={() => openModal("radius-3xl")}>
      3x Large
    </Button>
  </Stack>
 )
}`;
