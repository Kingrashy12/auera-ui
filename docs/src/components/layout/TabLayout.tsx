import { TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import CodeBlock from "./code/Block";

type LayoutProps = {
  code: string;
  fileName?: string;
  children: React.ReactNode;
};

const TabLayout: React.FC<LayoutProps> = ({ code, fileName, children }) => {
  return (
    <Tabs rounded variant="solid">
      <TabHandle icon={LuEye} iconSize={19} value="preview">
        Preview
      </TabHandle>
      <TabHandle icon={IoCodeSlash} value="code">
        Code
      </TabHandle>
      <TabPanel className="mt-5">{children}</TabPanel>
      <TabPanel>
        <CodeBlock code={code} fileName={fileName || ""} lg="tsx" />
      </TabPanel>
    </Tabs>
  );
};

export default TabLayout;
