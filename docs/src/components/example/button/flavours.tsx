import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";

const ButtonFlavours = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-3">
          <Stack wrap align="horizontal">
            <Button>Corporate</Button>
            <Button flavour="frost">Frost</Button>
            <Button flavour="neumorphic">Neumorphic</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="flavours.tsx"
            code={buttonCode.flavours}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonFlavours;
