import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ButtonFlavours = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack wrap align="horizontal">
            <Button>Corporate</Button>
            <Button flavour="frost">Frost</Button>
            <Button flavour="neumorphic">Neumorphic</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="flavours.tsx"
            code={buttonCode.flavours}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default ButtonFlavours;
