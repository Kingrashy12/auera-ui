import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { buttonCode } from "@/data/code/button";
import { Button, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CustomSpinner = () => {
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
    </CardContent>
  );
};

export default CustomSpinner;
