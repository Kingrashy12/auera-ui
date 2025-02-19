import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CheckboxDemo = () => {
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
          <Stack>
            <Checkbox
              classNames={{ container: "theme-dark:text-white font-inter" }}
            >
              I have read and agree to the terms of service.
            </Checkbox>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={checkbox_codes.demo} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CheckboxDemo;
