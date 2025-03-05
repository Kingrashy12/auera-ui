import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { TextInput, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const TextInputWithIcon = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <Stack className="mb-1" align="horizontal" wrap>
            <TextInput
              className="w-fit"
              icon={MdOutlineAlternateEmail}
              placeholder="Enter your email address"
            />
            <TextInput
              className="w-fit"
              icon={FaLocationDot}
              placeholder="Where are you headed?"
              iconSize={18}
            />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default TextInputWithIcon;

const code = `import { TextInput, Stack } from "auera-ui";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Demo = () => {
 return (
  <Stack className="mb-1" align="horizontal" wrap>
    <TextInput
      className="w-fit"
      icon={MdOutlineAlternateEmail}
      placeholder="Enter your email address"
    />
    <TextInput
      className="w-fit"
      icon={FaLocationDot}
      placeholder="Where are you headed?"
      iconSize={18}
    />
  </Stack>
 )
}`;
