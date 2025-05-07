import React from "react";
import CodeBlock from "@/components/layout/code/Block";
import { boxCode } from "@/data/code/box";
import { Box, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import { LuEye } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import CardContent from "@/components/lib/CardContent";

const BoxWithDirection = () => {
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
            <Box direction="column" fullWidth className="p-4 gap-4">
              <Box className="bg-blue-500 w-full h-24 rounded-md" />
              <Box className="bg-blue-700 w-full h-24 rounded-md" />
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="BoxDemo.tsx" lg="tsx" code={boxCode.direction} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default BoxWithDirection;
