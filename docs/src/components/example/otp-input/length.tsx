import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const OTPLength = () => {
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
            <Card>
              <OTPInput onComplete={(otp) => console.log(otp)} length={6} />
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="otp-input/length.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default OTPLength;

const code = `import { OTPInput, Stack, Card } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
   <Card>
    <OTPInput length={6} />
   </Card>
  </Stack>
 )
};`;
