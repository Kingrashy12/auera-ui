import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";

const LoadingButton = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Button isLoading>Loading</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="loading.tsx"
            code={buttonCode.loading}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default LoadingButton;
