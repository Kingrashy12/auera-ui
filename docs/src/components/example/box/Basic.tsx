import CodeBlock from "@/components/layout/code/Block";
import { boxCode } from "@/data/code/box";
import { Box, Card, Stack, Tabs } from "auera-ui";
import React from "react";

const BoxBasic = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack>
            <Box className="border-dashed border font-inter text-muted text-base p-4 border-[var(--auera-text-muted)]">
              This is a basic Box content.
            </Box>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock fileName="BasicBox.tsx" lg="tsx" code={boxCode.basic} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default BoxBasic;
