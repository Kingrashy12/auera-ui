import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { TextInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const TextInputVariants = () => {
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
            <TextInput className="w-fit" variant="solid" />
            <TextInput className="w-fit" variant="outline" />
            <TextInput className="w-fit" variant="ghost" />
            <TextInput className="w-fit" variant="unstyled" />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default TextInputVariants;

const code = `import { TextInput, Stack } from "auera-ui";

const Demo = () => {
 return (
   <Stack className="mb-1" align="horizontal" wrap>
      <TextInput className="w-fit" variant="solid" />
      <TextInput className="w-fit" variant="outline" />
      <TextInput className="w-fit" variant="ghost" />
      <TextInput className="w-fit" variant="unstyled" />
   </Stack>
 )
}`;
