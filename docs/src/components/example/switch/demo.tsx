import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Stack, Switch, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SwitchDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Stack>
            <Switch className="theme-dark:text-white font-inter text-sm">
              Enable Notifications
            </Switch>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="switch/demo.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default SwitchDemo;

const code = `import { Switch } from "auera-ui";

const Demo = () => {
 return (
  <Switch>
    Enable Notifications
  </Switch>
 )
};`;
