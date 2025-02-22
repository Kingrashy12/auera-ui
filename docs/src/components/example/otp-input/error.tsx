import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  Card,
  OTPInput,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
  toast,
} from "auera-ui";
import React, { useEffect, useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { tw } from "stywind";

const CompleteOTP = () => {
  const [otp, setOtp] = useState("");
  const pin = "2025";
  const INCORRECT = otp.length === 4 && otp !== pin;

  useEffect(() => {
    if (INCORRECT) {
      toast.error("Incorrect pin, [hint]: 2025 😊");
    }
  }, [otp, INCORRECT]);

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
