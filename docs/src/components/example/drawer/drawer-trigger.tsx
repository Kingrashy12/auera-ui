import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { drawer_codes } from "@/data/code/drawer";
import {
  Button,
  DrawerTrigger,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";

const UsingDrawerTrigger = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <DrawerTrigger value="drawer-demo">
              <Button>Open drawer</Button>
            </DrawerTrigger>
          </Stack>
        </TabPanel>
        <TabPanel className="flex flex-col gap-4">
          <CodeBlock
            code={drawer_codes.trigger}
            lg="tsx"
            fileName="drawer/drawer-trigger.tsx"
          />
          {/* <CodeBlock
            code={drawer_codes.overlays.demo}
            lg="tsx"
            fileName="components/overlays/drawer-demo.tsx"
          /> */}
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default UsingDrawerTrigger;
