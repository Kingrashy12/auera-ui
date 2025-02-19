import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Avatar, StatusBadge, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const StatusBadge_Sizes = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4 flex items-center gap-5">
          <StatusBadge size="md">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
          <StatusBadge size="lg">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="status-badge/sizes.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default StatusBadge_Sizes;

const code = `import { Avatar, StatusBadge, Box } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Box className="items-center gap-5">
    <StatusBadge size="md">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
    <StatusBadge size="lg">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
  </Box>
 )
};`;
