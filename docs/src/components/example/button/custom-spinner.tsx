import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs } from "auera-ui";
import React from "react";
import { CgSpinner } from "react-icons/cg";

const CustomSpinner = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack>
            <Button
              isLoading
              spinner={<CgSpinner size={20} className="animate-spin" />}
            >
              Loading
            </Button>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock
            fileName="custom-spinner.tsx"
            code={buttonCode.custom_spinner}
            lg="tsx"
          />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default CustomSpinner;
