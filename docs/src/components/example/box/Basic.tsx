import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { boxCode } from "@/data/code/box";
import { Box, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const BoxBasic = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel>
          <Stack>
            <Box className="border-dashed border font-inter text-muted text-base p-4 border-(--auera-text-muted)">
              This is a basic Box content.
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="BasicBox.tsx" lg="tsx" code={boxCode.basic} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default BoxBasic;
