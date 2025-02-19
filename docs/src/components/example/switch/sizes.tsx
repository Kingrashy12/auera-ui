import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Stack, Switch, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SwitchSizes = () => {
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
          <Stack
            wrap
            align="horizontal"
            className="font-inter theme-dark:text-white text-sm"
          >
            <Switch size="sm" className="flex-col">
              sm
            </Switch>
            <Switch size="md" className="flex-col">
              md
            </Switch>
            <Switch size="lg" className="flex-col">
              lg
            </Switch>
            <Switch size="xl" className="flex-col">
              xl
            </Switch>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="switch/sizes.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default SwitchSizes;

const code = `import { Switch, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack wrap align="horizontal">
    <Switch size="sm" className="flex-col">
      sm
    </Switch>
    <Switch size="md" className="flex-col">
      md
    </Switch>
    <Switch size="lg" className="flex-col">
      lg
    </Switch>
    <Switch size="xl" className="flex-col">
      xl
    </Switch>
  </Stack>
 )
};`;
