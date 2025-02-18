import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const ModalDemo = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Button
              radius="md"
              className="font-inter"
              withTrigger
              trigger="modal"
              triggerType="open"
              triggerValue="modal-demo"
            >
              Open Modal
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" code="" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ModalDemo;
