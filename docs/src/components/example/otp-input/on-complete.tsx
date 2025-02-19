import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CompleteOTP = () => {
  const [otp, setOtp] = useState("");
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
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
