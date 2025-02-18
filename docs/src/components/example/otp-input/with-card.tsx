import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const OTPWithCard = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Card>
              <OTPInput onComplete={(otp) => console.log(otp)} />
            </Card>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="otp-input/with-card.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default OTPWithCard;

const code = `import { OTPInput, Stack, Card } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
   <Card>
    <OTPInput />
   </Card>
  </Stack>
 )
};`;
