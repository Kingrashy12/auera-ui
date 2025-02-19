import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Avatar, StatusBadge, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const StatusBadge_Status = () => {
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
          <StatusBadge placement="right-bottom">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
          <StatusBadge placement="right-bottom" status="offline">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
          <StatusBadge placement="right-bottom" status="busy">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
          <StatusBadge placement="right-bottom" status="away">
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="status-badge/status.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default StatusBadge_Status;

const code = `import { Avatar, StatusBadge, Box } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Box className="items-center gap-5">
    <StatusBadge placement="right-bottom">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
    <StatusBadge placement="right-bottom" status="offline">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
    <StatusBadge placement="right-bottom" status="busy">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
    <StatusBadge placement="right-bottom" status="away">
      <Avatar size="md" src={images[1]} />
    </StatusBadge>
  </Box>
 )
};`;
