import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const OTPDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
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
