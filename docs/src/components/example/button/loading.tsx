import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { buttonCode } from "@/data/code/button";
import { Button, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const LoadingButton = () => {
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
            <Button isLoading>Loading</Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="loading.tsx"
            code={buttonCode.loading}
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default LoadingButton;
