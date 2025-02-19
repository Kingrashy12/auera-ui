import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Stack, Switch, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SwitchColor = () => {
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
          <Stack wrap align="horizontal">
            <Switch color="red-500" />
            <Switch color="yellow-500" />
            <Switch color="green-500" unCheckColor="neutral-600" />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="switch/demo.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default SwitchColor;

const code = `import { Switch, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack wrap align="horizontal">
    <Switch color="red-500" />
    <Switch color="yellow-500" />
    <Switch color="green-500" unCheckColor="neutral-600" />
  </Stack>
 )
};`;
