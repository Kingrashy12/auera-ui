import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { IconButton, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoClose, IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const IButtonVariants = () => {
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
          <Stack wrap align="horizontal">
            <IconButton variant="subtle">
              <IoClose />
            </IconButton>
            <IconButton variant="outline">
              <IoClose />
            </IconButton>
            <IconButton variant="ghost">
              <IoClose />
            </IconButton>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="i_button/variants.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IButtonVariants;

const code = `import { IconButton, Stack } from "auera-ui";
import { IoClose } from "react-icons/io5";

const Demo = () => {
 return (
  <Stack wrap align="horizontal">
    <IconButton variant='subtle'>
      <IoClose />
    </IconButton>
    <IconButton variant="outline">
     <IoClose />
    </IconButton>
    <IconButton variant="ghost">
     <IoClose />
    </IconButton>
  </Stack>
 )
};`;
