import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { modal_codes } from "@/data/code/modal";
import { Button, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const FormModal = () => {
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
              triggerValue="form-modal"
            >
              Login
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex-col flex gap-6">
          <CodeBlock
            fileName="modal/form-modal.tsx"
            code={modal_codes.form_modal}
            lg="tsx"
          />
          <CodeBlock
            fileName="overlays/form-modal.tsx"
            code={modal_codes.form_modal_overlay}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default FormModal;
