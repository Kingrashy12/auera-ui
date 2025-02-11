import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";

const ButtonSizes = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack wrap align="horizontal">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="ButtonSizes.tsx"
            code={buttonCode.sizes}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonSizes;
