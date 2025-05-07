import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { buttonCode } from "@/data/code/button";
import { Button, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { HiOutlineMail, HiOutlineTrash } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ButtonWithIcon = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack wrap align="horizontal">
            <Button leftIcon={HiOutlineMail} leftIconSize={20}>
              Email
            </Button>
            <Button
              colorScheme="danger"
              rightIcon={HiOutlineTrash}
              rightIconSize={20}
            >
              Delete
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="icon.tsx" code={buttonCode.icon} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ButtonWithIcon;
