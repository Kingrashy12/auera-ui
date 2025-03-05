import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { PasswordInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const PasswordInputRadius = () => {
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
            <PasswordInput className="w-fit" radius="none" />
            <PasswordInput className="w-fit" radius="sm" />
            <PasswordInput className="w-fit" radius="md" />
            <PasswordInput className="w-fit" radius="lg" />
            <PasswordInput className="w-fit" radius="xl" />
            <PasswordInput className="w-fit" radius="full" />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default PasswordInputRadius;

const code = `import { PasswordInput, Stack } from "auera-ui";

const Demo = () => {
 return (
   <Stack className="mb-1" align="horizontal" wrap>
    <PasswordInput className="w-fit" radius="none" />
    <PasswordInput className="w-fit" radius="sm" />
    <PasswordInput className="w-fit" radius="md" />
    <PasswordInput className="w-fit" radius="lg" />
    <PasswordInput className="w-fit" radius="xl" />
    <PasswordInput className="w-fit" radius="full" />
   </Stack>
 )
}`;
