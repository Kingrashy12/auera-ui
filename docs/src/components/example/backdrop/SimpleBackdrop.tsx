import CodeBlock from "@/components/layout/code/Block";
import { Backdrop, Button, Card, OTPInput, Stack, Tabs } from "auera-ui";
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
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Card>
      <Tabs variant="solid" rounded>
        <Tabs.Handle value="preview">Preview</Tabs.Handle>
        <Tabs.Handle value="code">Code</Tabs.Handle>
        <Tabs.Panel>
          <Stack>
            <Button onClick={handleOpen}>Open Backdrop</Button>
          </Stack>
          <Backdrop open={open} onClose={handleClose} centerContent>
            <OTPInput onComplete={(otp) => console.log("You entered:", otp)} />
          </Backdrop>
        </Tabs.Panel>
        <Tabs.Panel>
          <CodeBlock fileName="SimpleBackdrop.tsx" lg="tsx" code={code} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default SimpleBackdrop;
