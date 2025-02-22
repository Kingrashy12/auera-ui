import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const OTPDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Stack>
            <OTPInput onComplete={(otp) => console.log(otp)} />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="otp-input/demo.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default OTPDemo;

const code = `import { OTPInput, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
    <OTPInput />
  </Stack>
 )
};`;
