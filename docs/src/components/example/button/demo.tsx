import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const ButtonDemo = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack>
            <Button>Button</Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock fileName=".." code={buttonCode.demo} lg="tsx" />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonDemo;
