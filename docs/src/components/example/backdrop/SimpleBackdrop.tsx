import CodeBlock from "@/components/layout/code/Block";
import {
  Backdrop,
  Button,
  Card,
  OTPInput,
  Stack,
  Tabs,
  TabHandle,
  TabPanel,
  toast,
} from "auera-ui";
import React, { useState } from "react";

const code = `import { Backdrop, Button, OTPInput, Stack } from "auera-ui";
import React, { useState } from "react";

const  SimpleBackdrop = () => {
 const [open, setOpen] = useState(false); 

  const handleClose = () => {
    setOpen(false);
   };
    const handleOpen = () => {
      setOpen(true);
     };
 return (
  <>
   <Button onClick={handleOpen}>Open Backdrop</Button>
   <Backdrop open={open} onClose={handleClose} centerContent>
    <OTPInput onComplete={(otp) => console.log("You entered:", otp)} />
   </Backdrop>
  </>
 )
}
`;
const SimpleBackdrop = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCode = (code: string) => {
    setOtp(code);
    if (otp.length == 4) {
      toast.success("OTP Verified Successfully");
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  return (
    <Card>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel>
          <Stack>
            <Button onClick={handleOpen}>Open Backdrop</Button>
          </Stack>
          <Backdrop open={open} onClose={handleClose} centerContent>
            <OTPInput onComplete={(otp) => handleCode(otp)} />
          </Backdrop>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="SimpleBackdrop.tsx" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default SimpleBackdrop;
