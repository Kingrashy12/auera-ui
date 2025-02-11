import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { drawer_codes } from "@/data/code/drawer";
import { Button, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const DrawerPosition = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack className="font-inter">
            <Button
              withTrigger
              trigger="drawer"
              triggerType="open"
              triggerValue="left-drawer-demo"
            >
              Open left drawer
            </Button>
            <Button
              withTrigger
              trigger="drawer"
              triggerType="open"
              triggerValue="drawer-demo"
            >
              Open right drawer
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel className="flex flex-col gap-4">
          <CodeBlock
            code={drawer_codes.position}
            lg="tsx"
            fileName="drawer/position.tsx"
          />
          {/* <CodeBlock
            code={drawer_codes.overlays.position}
            lg="tsx"
            fileName="components/overlays/left-drawer-demo.tsx"
          /> */}
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default DrawerPosition;
