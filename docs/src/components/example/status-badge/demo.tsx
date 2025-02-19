import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Avatar, StatusBadge, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const StatusBadgeDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <StatusBadge>
            <Avatar size="md" src={images[1]} />
          </StatusBadge>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default StatusBadgeDemo;

const code = `import { Avatar, StatusBadge } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <StatusBadge>
   <Avatar size="md" src={images[1]} />
  </StatusBadge>
 )
};`;
