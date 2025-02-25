import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { modal_codes } from "@/data/code/modal";
import { Button, openModal, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ModalDemo = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Button radius="md" onClick={() => openModal("modal-demo")}>
              Open Modal
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock
            fileName="modal/demo.tsx"
            code={modal_codes.demo}
            lg="tsx"
          />
          <CodeBlock
            fileName="overlays/modal-demo.tsx"
            code={modal_codes.demo_modal}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalDemo;
