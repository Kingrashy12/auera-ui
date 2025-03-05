import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { TextInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const TextInputRadius = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack className="mb-1" align="horizontal" wrap>
            <TextInput className="w-fit" radius="none" />
            <TextInput className="w-fit" radius="sm" />
            <TextInput className="w-fit" radius="md" />
            <TextInput className="w-fit" radius="lg" />
            <TextInput className="w-fit" radius="xl" />
            <TextInput className="w-fit" radius="full" />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default TextInputRadius;

const code = `import { TextInput, Stack } from "auera-ui";

const Demo = () => {
 return (
   <Stack className="mb-1" align="horizontal" wrap>
    <TextInput className="w-fit" radius="none" />
    <TextInput className="w-fit" radius="sm" />
    <TextInput className="w-fit" radius="md" />
    <TextInput className="w-fit" radius="lg" />
    <TextInput className="w-fit" radius="xl" />
    <TextInput className="w-fit" radius="full" />
   </Stack>
 )
}`;
