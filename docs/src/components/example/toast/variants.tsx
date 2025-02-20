import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, Stack, TabHandle, TabPanel, Tabs, toast } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ToastVariants = () => {
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
            <Button onClick={() => toast.info("This is a toast message!")}>
              Info
            </Button>
            <Button
              colorScheme="success"
              onClick={() => toast.success("This is a toast message!")}
            >
              Success
            </Button>
            <Button
              colorScheme="warning"
              onClick={() => toast.warning("This is a toast message!")}
            >
              Warning
            </Button>
            <Button
              colorScheme="danger"
              onClick={() => toast.error("This is a toast message!")}
            >
              Error
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

export default ToastVariants;

const code = `import { Button, toast, Stack } from "auera-ui";

const Demo = () => {
  return (
    <Stack wrap align="horizontal">
      <Button onClick={() => toast.info("This is a toast message!")}>
        Info
      </Button>
      <Button
        colorScheme="success"
        onClick={() => toast.success("This is a toast message!")}
      >
        Success
      </Button>
      <Button
        colorScheme="warning"
        onClick={() => toast.warning("This is a toast message!")}
      >
        Warning
      </Button>
      <Button
        colorScheme="danger"
        onClick={() => toast.error("This is a toast message!")}
      >
        Error
      </Button>
    </Stack>
  );
};
`;
