import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const ButtonFlavours = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack wrap align="horizontal">
            <Button>Corporate</Button>
            <Button flavour="frost">Frost</Button>
            <Button flavour="neumorphic">Neumorphic</Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock
            fileName="flavours.tsx"
            code={buttonCode.flavours}
            lg="tsx"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonFlavours;
