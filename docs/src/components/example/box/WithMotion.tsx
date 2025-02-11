import React from "react";
import CodeBlock from "@/components/layout/code/Block";
import { boxCode } from "@/data/code/box";
import { Box, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";

const BoxWithMotion = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Box
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-4 shadow-md rounded-md bg-blue-500 text-white text-center font-poppins cursor-pointer"
            >
              Sliding In From Left
            </Box>

            <Box
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, translateX: 10, translateY: -20 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="p-4 shadow-md rounded-md bg-green-500 text-white text-center font-poppins cursor-pointer"
            >
              Sliding In From Right
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="BoxDemo.tsx"
            lg="tsx"
            code={boxCode.with_motion}
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default BoxWithMotion;
