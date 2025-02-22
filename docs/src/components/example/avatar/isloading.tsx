import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Avatar, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const LoadingAvatar = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4 flex items-center flex-wrap gap-2">
          <Avatar src={images[1]} size="sm" isLoading />
          <Avatar src={images[1]} size="md" isLoading />
          <Avatar src={images[1]} size="lg" isLoading />
          <Avatar src={images[1]} size="xl" isLoading />
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default LoadingAvatar;

const code = `import { Avatar,Box } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () =>{
return (
  <Box>
    <Avatar src={images[1]} size="sm" isLoading />
    <Avatar src={images[1]} size="md" isLoading />
    <Avatar src={images[1]} size="lg" isLoading />
    <Avatar src={images[1]} size="xl" isLoading />
   </Box>
 )       
}`;
