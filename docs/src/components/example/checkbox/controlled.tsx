import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ControlledCheck = () => {
  const [checked, setChecked] = useState(true);
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
              checked={checked}
              onCheckChange={(status) => setChecked(status)}
              classNames={{ container: "text-neutral-400 font-inter" }}
            >
              Checked: {JSON.stringify(checked)}
            </Checkbox>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="checkbox/controlled.tsx"
            code={checkbox_codes.controlled}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ControlledCheck;
