import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const FeedMenu = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="w-fit">Content</TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={"code"} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default FeedMenu;
