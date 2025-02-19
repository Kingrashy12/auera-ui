import React from "react";
import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import { LuEye } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";

const ButtonWithTrigger = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Button
              withTrigger
              trigger="drawer"
              triggerType="open"
              triggerValue="drawer-demo"
            >
              View Notifications
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="with-trigger.tsx"
            code={buttonCode.withTrigger}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonWithTrigger;
