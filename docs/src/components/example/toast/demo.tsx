import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, Stack, TabHandle, TabPanel, Tabs, toast } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ToastDemo = () => {
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
            <Button onClick={() => toast.info("This is a toast message!")}>
              Make a toast
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="toast/demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ToastDemo;

const code = `import { Button, toast } from "auera-ui";

const Demo = () => {
 return (
  <Button onClick={() => toast.info("This is a toast message!")}>
    Make a toast
  </Button>
 )
};`;
