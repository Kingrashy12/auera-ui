import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const ButtonVariants = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack wrap align="horizontal">
            <Button>Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="light">Light</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="flat">Flat</Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock
            fileName="ButtonVariants.tsx"
            code={buttonCode.variants}
            lg="tsx"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonVariants;
