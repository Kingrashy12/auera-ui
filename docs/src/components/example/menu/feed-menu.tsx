import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const FeedMenu = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="w-fit">Content</TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={"code"} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default FeedMenu;
