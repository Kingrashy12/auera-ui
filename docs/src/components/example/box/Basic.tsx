import CodeBlock from "@/components/layout/code/Block";
import { boxCode } from "@/data/code/box";
import { Box, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const BoxBasic = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel>
          <Stack>
            <Box className="border-dashed border font-inter text-muted text-base p-4 border-[var(--auera-text-muted)]">
              This is a basic Box content.
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="BasicBox.tsx" lg="tsx" code={boxCode.basic} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BoxBasic;
