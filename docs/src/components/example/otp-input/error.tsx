import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Card, OTPInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";
import { tw } from "stywind";

const CompleteOTP = () => {
  const [otp, setOtp] = useState("");
  const pin = "2025";
  const INCORRECT = otp.length === 4 && otp !== pin;

  console.log({ INCORRECT, otp });

  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Card>
              <OTPInput error={INCORRECT} onComplete={(otp) => setOtp(otp)} />
            </Card>
            <p
              className={tw(
                "font-inter text-base text-red-500 animate-dropIn transition-transform",
                INCORRECT ? "block" : "hidden"
              )}
            >
              Incorrect pin
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
  const pin = "2025";
  const INCORRECT = otp.length === 4 && otp !== pin;

 return (
  <Stack>
   <Card>
    <OTPInput error={INCORRECT} onComplete={(otp) => setOtp(otp)} />
    </Card>
    <p
     className={tw(
       "font-inter text-base text-red-500 animate-dropIn transition-transform",
       INCORRECT ? "block" : "hidden"
     )}
    >
      Incorrect pin
    </p>
  </Stack>
 )
};`;
