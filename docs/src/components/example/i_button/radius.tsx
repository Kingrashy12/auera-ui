import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { IconButton, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoClose, IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const IButtonRadius = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Stack wrap align="horizontal">
            <IconButton radius="none">
              <IoClose />
            </IconButton>
            <IconButton radius="sm">
              <IoClose />
            </IconButton>
            <IconButton radius="md">
              <IoClose />
            </IconButton>
            <IconButton radius="lg">
              <IoClose />
            </IconButton>
            <IconButton radius="xl">
              <IoClose />
            </IconButton>
            <IconButton radius="2xl">
              <IoClose />
            </IconButton>
            <IconButton radius="full">
              <IoClose />
            </IconButton>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="i_button/radius.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IButtonRadius;

const code = `import { IconButton, Stack } from "auera-ui";
import { IoClose } from "react-icons/io5";

const Demo = () => {
 return (
  <Stack wrap align="horizontal">
    <IconButton radius="none">
      <IoClose />
    </IconButton>
    <IconButton radius="sm">
      <IoClose />
    </IconButton>
    <IconButton radius="md">
      <IoClose />
    </IconButton>
    <IconButton radius="lg">
      <IoClose />
    </IconButton>
    <IconButton radius="xl">
      <IoClose />
    </IconButton>
    <IconButton radius="2xl">
      <IoClose />
    </IconButton>
    <IconButton radius="full">
      <IoClose />
    </IconButton>
   </Stack>
 )
};`;
