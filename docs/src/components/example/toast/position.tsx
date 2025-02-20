import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Button, Stack, TabHandle, TabPanel, Tabs, toast } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const ToastPositions = () => {
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
          <Stack wrap align="horizontal">
            <Button onClick={() => toast.info("This is a toast message!")}>
              Default
            </Button>
            <Button
              onClick={() =>
                toast.info("This is a toast message!", { position: "top-left" })
              }
            >
              Top Left
            </Button>
            <Button
              onClick={() =>
                toast.info("This is a toast message!", {
                  position: "bottom-left",
                })
              }
            >
              Bottom Left
            </Button>
            <Button
              onClick={() =>
                toast.info("This is a toast message!", {
                  position: "bottom-right",
                })
              }
            >
              Bottom Right
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="toast/position.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default ToastPositions;

const code = `import { Button, toast, Stack } from "auera-ui";

const Demo = () => {
 return (
   <Stack wrap align="horizontal">
     <Button onClick={() => toast.info("This is a toast message!")}>
       Default
     </Button>
     <Button
       onClick={() =>
         toast.info("This is a toast message!", { position: "top-left" })
       }
     >
       Top Left
     </Button>
     <Button
       onClick={() =>
         toast.info("This is a toast message!", {
           position: "bottom-left",
         })
       }
     >
       Bottom Left
     </Button>
     <Button
       onClick={() =>
         toast.info("This is a toast message!", {
           position: "bottom-right",
         })
       }
     >
       Bottom Right
     </Button>
   </Stack>
 )
};`;
