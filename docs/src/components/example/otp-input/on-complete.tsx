import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";

const CompleteOTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Card>
              <OTPInput onComplete={(otp) => setOtp(otp)} />
            </Card>
            <p className="font-inter text-base theme-dark:text-white">
              OTP: {otp}
            </p>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="otp-input/on-complete.tsx"
            lg="tsx"
            code={code}
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CompleteOTP;

const code = `import { OTPInput, Stack, Card } from "auera-ui";
import { useState } from "react";

const Demo = () => {
 const [otp, setOtp] = useState("");
 return (
  <Stack>
   <Card>
    <OTPInput onComplete={(otp) => setOtp(otp)} />
   </Card>
   <p className="font-inter text-base theme-dark:text-white">
     OTP: {otp}
    </p>
  </Stack>
 )
};`;
