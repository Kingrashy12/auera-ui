import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CheckboxSizes = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack wrap align="horizontal">
            <Checkbox size="xs" />
            <Checkbox size="sm" />
            <Checkbox size="md" />
          </Stack>
        </TabPanel>
        <TabPanel className="mt-3">
          <CodeBlock
            fileName="checkbox/size.tsx"
            code={checkbox_codes.size}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CheckboxSizes;
