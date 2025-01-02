import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { HiOutlineMail, HiOutlineTrash } from "react-icons/hi";

const ButtonWithIcon = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
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
    </Card>
  );
};

export default ButtonWithIcon;
