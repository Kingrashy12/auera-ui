import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { modal_codes } from "@/data/code/modal";
import { Button, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const ModalDemo = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview" className="!font-inter">
          Preview
        </TabHandle>
        <TabHandle value="code" className="!font-inter">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Button
              radius="md"
              className="font-inter text-sm"
              withTrigger
              trigger="modal"
              triggerType="open"
              triggerValue="modal-demo"
            >
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
