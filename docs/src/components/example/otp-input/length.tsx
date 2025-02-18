import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const OTPLength = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
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
