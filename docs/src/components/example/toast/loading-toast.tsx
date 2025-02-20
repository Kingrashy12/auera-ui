import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, Stack, TabHandle, TabPanel, Tabs, toast } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const LoadingToast = () => {
  const sendMessage = () => {
    toast.loading("Sending message!", { key: "mesg_sender" });
    setTimeout(
      () => toast.success("Message sent!", { key: "mesg_sender" }),
      2000
    );
  };

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
            <Button onClick={sendMessage}>Send Message</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="toast/demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default LoadingToast;

const code = `import { Button, toast } from "auera-ui";

const sendMessage = () => {
    toast.loading("This is a toast message!", { key: "mesg_sender" });
    setTimeout(
      () => toast.success("Message sent!", { key: "mesg_sender" }),
      2000
    );
};

const Demo = () => {
 return <Button onClick={sendMessage}>Send Message</Button>
};`;
