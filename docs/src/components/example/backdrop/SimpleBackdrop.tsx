import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";
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
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const code = `import { Backdrop, Button, OTPInput, toast, Card } from "auera-ui";
import React, { useState } from "react";

const  SimpleBackdrop = () => {
 const [open, setOpen] = useState(false); 

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
  <>
   <Button onClick={handleOpen}>Open Backdrop</Button>
   <Backdrop open={open} onClose={handleClose} centerContent>
    <Card>
     <OTPInput onComplete={(otp) => handleCode(otp)} />
    </Card>
   </Backdrop>
  </>
 )
}
`;
const SimpleBackdrop = () => {
  const { lang } = useDocState();
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
            <Button onClick={handleOpen} radius="lg">
              Open Backdrop
            </Button>
          </Stack>
          <Backdrop open={open} onClose={handleClose} centerContent>
            <Card>
              <OTPInput onComplete={(otp) => handleCode(otp)} />
            </Card>
          </Backdrop>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            fileName="SimpleBackdrop.tsx"
            lg="tsx"
            code={
              lang.ext === "tsx" ? code : replaceInCode(code, /: string/g, "")
            }
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default SimpleBackdrop;
