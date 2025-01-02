import CodeBlock from "@/components/layout/code/Block";
import { buttonCode } from "@/data/code/button";
import { Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { CgSpinner } from "react-icons/cg";

const CustomSpinner = () => {
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Button
              isLoading
              spinner={<CgSpinner size={20} className="animate-spin" />}
            >
              Loading
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="custom-spinner.tsx"
            code={buttonCode.custom_spinner}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default CustomSpinner;
