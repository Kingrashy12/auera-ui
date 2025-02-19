import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { modal_codes } from "@/data/code/modal";
import { Button, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const FormModal = () => {
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
