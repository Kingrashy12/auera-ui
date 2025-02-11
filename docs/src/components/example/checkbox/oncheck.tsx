import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { checkbox_codes } from "@/data/code/checkbox";
import { Checkbox, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";

const OnCheck = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Checkbox
              onCheckChange={(checked) => setChecked(checked)}
              classNames={{ container: "text-neutral-400 font-inter" }}
            >
              Checked: {JSON.stringify(checked)}
            </Checkbox>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="checkbox/oncheck.tsx"
            code={checkbox_codes.oncheck}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default OnCheck;
