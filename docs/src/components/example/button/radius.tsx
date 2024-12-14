import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const ButtonRadius = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack wrap align="horizontal">
            <Button radius="none">None</Button>
            <Button radius="sm">Small</Button>
            <Button radius="md">Medium</Button>
            <Button radius="lg">Large</Button>
            <Button radius="xl">Extra Large</Button>
            <Button radius="full">Full</Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock
            fileName="ButtonRadius.tsx"
            code={buttonCode.radius}
            lg="tsx"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonRadius;
