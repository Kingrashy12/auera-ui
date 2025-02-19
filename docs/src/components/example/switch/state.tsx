import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Stack, Switch, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SwitchState = () => {
  const [state, setState] = useState(false);
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
            <Switch
              onToggleSwitch={(status) => setState(status)}
              className="font-inter theme-dark:text-white"
            >
              {state ? "ON" : "OFF"}
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

export default SwitchState;

const code = `import { Switch, Stack } from "auera-ui";
import { useState } from "react";

const Demo = () => {
 const [state, setState] = useState(false);

 return (
  <Stack>
   <Switch
    onToggleSwitch={(status) => setState(status)}
    className="font-inter theme-dark:text-white"
    >
   {state ? "ON" : "OFF"}
   </Switch>
  </Stack>
 )
};`;
