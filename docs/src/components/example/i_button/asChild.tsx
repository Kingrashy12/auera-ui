import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { IconButton, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoVideocam } from "react-icons/io5";
import { MdHomeMax } from "react-icons/md";

const code = `import { IconButton, Stack } from "auera-ui";
import { IoVideocam } from "react-icons/io5";
import { MdHomeMax } from "react-icons/md";

const Demo = () => {
 return (
   <Stack align="horizontal">
      <IconButton
        asChild
        className="gap-2 justify-center"
        size="lg"
        radius="xl"
      >
        <MdHomeMax size={25} />
        <p className="font-poppins font-medium text-base">Home</p>
      </IconButton>
      <IconButton
        asChild
        className="gap-2 justify-center"
        size="lg"
        radius="xl"
      >
        <IoVideocam size={25} />
        <p className="font-poppins font-medium text-base">Live</p>
      </IconButton>
    </Stack>
 )
};`;

const IButtonAsChild = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-4">
          <Stack align="horizontal">
            <IconButton
              asChild
              className="gap-2 justify-center"
              size="lg"
              radius="xl"
            >
              <MdHomeMax size={25} />
              <p className="font-poppins font-medium text-base">Home</p>
            </IconButton>
            <IconButton
              asChild
              className="gap-2 justify-center"
              size="lg"
              radius="xl"
            >
              <IoVideocam size={25} />
              <p className="font-poppins font-medium text-base">Live</p>
            </IconButton>
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="i_button/asChild.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default IButtonAsChild;
