import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const ButtonColors = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack wrap align="horizontal">
            <Button>Primary</Button>
            <Button colorScheme="danger">Danger</Button>
            <Button colorScheme="warning">Warning</Button>
            <Button colorScheme="success">Success</Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock
            fileName="ButtonColors.tsx"
            code={buttonCode.colors}
            lg="tsx"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonColors;
