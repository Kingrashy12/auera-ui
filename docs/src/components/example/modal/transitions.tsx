import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, openModal, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ModalTransition = () => {
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
            <Button radius="md" onClick={() => openModal("transition-dropIn")}>
              DropIn
            </Button>
            <Button radius="md" onClick={() => openModal("transition-walkIn")}>
              WalkIn
            </Button>
            <Button radius="md" onClick={() => openModal("transition-slideIn")}>
              SlideIn
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock fileName="modal/transitions.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalTransition;

const code = `import { Button, openModal, Stack } from "auera-ui";

export const ModalTransitionDemo = () => {
 return (
  <Stack wrap align="horizontal">
    <Button radius="md" onClick={() => openModal("transition-dropIn")}>
      dropIn
    </Button>
    <Button radius="md" onClick={() => openModal("transition-walkIn")}>
      walkIn
    </Button>
    <Button radius="md" onClick={() => openModal("transition-slideIn")}>
      slideIn
    </Button>
  </Stack>
 )
}`;
