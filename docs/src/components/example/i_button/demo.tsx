import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { IconButton, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoClose, IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const code = `import { IconButton } from "auera-ui";
import { IoClose } from "react-icons/io5";

const Demo = () => {
 return (
 <IconButton>
    <IoClose />
 </IconButton>
 )
};`;

const IButtonDemo = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <IconButton>
            <IoClose />
          </IconButton>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IButtonDemo;
