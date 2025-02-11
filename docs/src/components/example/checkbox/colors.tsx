import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const CheckboxColors = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack align="horizontal">
            <Checkbox color="pink-500" />
            <Checkbox color="purple-600" />
          </Stack>
        </TabPanel>
        <TabPanel className="mt-3">
          <CodeBlock
            fileName="checkbox/colors.tsx"
            code={checkbox_codes.color}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CheckboxColors;
