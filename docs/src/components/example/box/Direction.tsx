import React from "react";
import CodeBlock from "@/components/layout/code/Block";
import { boxCode } from "@/data/code/box";
import { Box, Card, Stack, Tabs } from "auera-ui";

const BoxWithDirection = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack>
            <Box direction="column" fullWidth className="p-4 gap-4">
              <Box className="bg-blue-500 w-full h-24 rounded-md" />
              <Box className="bg-blue-700 w-full h-24 rounded-md" />
            </Box>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock fileName="BoxDemo.tsx" lg="tsx" code={boxCode.direction} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default BoxWithDirection;
