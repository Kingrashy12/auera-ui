import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";
import { HiOutlineMail, HiOutlineTrash } from "react-icons/hi";

const ButtonWithIcon = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
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
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock fileName="icon.tsx" code={buttonCode.icon} lg="tsx" />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default ButtonWithIcon;
