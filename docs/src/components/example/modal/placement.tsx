import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, openModal, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ModalPlacement = () => {
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
            <Button radius="md" onClick={() => openModal("placement-top")}>
              Top
            </Button>
            <Button radius="md" onClick={() => openModal("placement-center")}>
              Center
            </Button>
            <Button radius="md" onClick={() => openModal("placement-bottom")}>
              Bottom
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock fileName="modal/placement.tsx" code={code} lg="tsx" />
          {/* <CodeBlock
            fileName="overlays/modal/**.tsx"
            code={overlayCodes}
            lg="tsx"
          /> */}
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalPlacement;

const code = `import { Button, openModal, Stack } from "auera-ui";

export const ModalPlacementDemo = () => {
 return (
  <Stack wrap align="horizontal">
   <Button radius="md" onClick={() => openModal("placement-top")}>
     Top
   </Button>
   <Button radius="md" onClick={() => openModal("placement-center")}>
     Center
   </Button>
   <Button radius="md" onClick={() => openModal("placement-bottom")}>
     Bottom
   </Button>
  </Stack>
 )
}`;
