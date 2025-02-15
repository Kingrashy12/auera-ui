import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { IconButton, StatusBadge, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { HiBell } from "react-icons/hi";

const code = `import { IconButton, StatusBadge } from "auera-ui";
import { HiBell } from "react-icons/hi";

const Demo = () => {
 return (
    <IconButton
      radius="lg"
      withTrigger
      trigger="drawer"
      triggerType="open"
      triggerValue="drawer-demo"
    >
     <StatusBadge>
       <HiBell size={20} />
     </StatusBadge>
    </IconButton>
 )
};`;

const IButtonWithTrigger = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-4">
          <IconButton
            radius="lg"
            withTrigger
            trigger="drawer"
            triggerType="open"
            triggerValue="drawer-demo"
          >
            <StatusBadge>
              <HiBell size={20} />
            </StatusBadge>
          </IconButton>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="i_button/with-trigger.tsx"
            code={code}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IButtonWithTrigger;
