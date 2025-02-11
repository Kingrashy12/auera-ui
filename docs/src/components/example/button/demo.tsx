import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";

const ButtonDemo = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack>
            <Button>Button</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName=".." code={buttonCode.demo} lg="tsx" />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonDemo;
