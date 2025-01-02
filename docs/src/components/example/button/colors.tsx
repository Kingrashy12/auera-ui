import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";

const ButtonColors = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal">
            <Button>Primary</Button>
            <Button colorScheme="danger">Danger</Button>
            <Button colorScheme="warning">Warning</Button>
            <Button colorScheme="success">Success</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="ButtonColors.tsx"
            code={buttonCode.colors}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonColors;
