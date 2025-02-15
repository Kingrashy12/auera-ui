import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Icon, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { FaHeart } from "react-icons/fa";

const code = `import { Icon } from "auera-ui";
import { FaHeart } from "react-icons/fa";

const BasicIcon = () => (
  <Icon
   icon={FaHeart}
   color="red"
   size={25}
   />
);`;

const IconDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-5">
          <Icon icon={FaHeart} color="red" size={25} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="icon/demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IconDemo;
