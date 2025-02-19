import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Avatar, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const StackDemo = () => {
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
            <Avatar size="md" src={images[1]} />
            <Avatar size="md" src={images[2]} />
            <Avatar size="md" src={images[3]} />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="stack/demo.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default StackDemo;

const code = `import { Avatar, Stack } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Stack>
    <Avatar size="md" src={images[1]} />
    <Avatar size="md" src={images[2]} />
    <Avatar size="md" src={images[3]} />
  </Stack>
 )
};`;
