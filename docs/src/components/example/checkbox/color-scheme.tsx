import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CheckboxColorSchemes = () => {
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
          <Stack align="horizontal" wrap>
            <Checkbox />
            <Checkbox colorScheme="danger" />
            <Checkbox colorScheme="success" />
            <Checkbox colorScheme="warning" />
          </Stack>
        </TabPanel>
        <TabPanel className="mt-3">
          <CodeBlock
            fileName="checkbox/color-scheme.tsx"
            code={checkbox_codes.color_scheme}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CheckboxColorSchemes;
