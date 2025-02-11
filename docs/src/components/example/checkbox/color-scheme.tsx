import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const CheckboxColorSchemes = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
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
