import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import {
  Avatar,
  Box,
  IconButton,
  Loading,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React, { useEffect, useState } from "react";
import { IoCodeSlash, IoReload } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const LoadingDemo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  const reload = () => {
    setIsLoading(true);
  };

  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4 space-y-4">
          <IconButton onClick={reload} radius="lg" variant="ghost">
            <IoReload size={20} />
          </IconButton>
          <Loading isLoading={isLoading}>
            <Box className="gap-3 items-center">
              <Avatar size="md" src={images[1]} />
              <Avatar size="md" src={images[2]} />
              <Avatar size="md" src={images[3]} />
            </Box>
          </Loading>
          <Loading isLoading={isLoading} loader="wave">
            <Box className="gap-3 items-center">
              <Avatar size="md" src={images[1]} />
              <Avatar size="md" src={images[2]} />
              <Avatar size="md" src={images[3]} />
            </Box>
          </Loading>
          <Loading isLoading={isLoading} loader="spin">
            <Box className="gap-3 items-center">
              <Avatar size="md" src={images[1]} />
              <Avatar size="md" src={images[2]} />
              <Avatar size="md" src={images[3]} />
            </Box>
          </Loading>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="loader-demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default LoadingDemo;

const code = `import { Avatar, Box, Loading } from "auera-ui";
import { useEffect, useState } from "react";
import { images } from "@/constant/images";

export const LoadingDemo = () => {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
 }, [isLoading]);

 return (
 <Box className="space-y-4">
  <Loading isLoading={isLoading}>
    <Box className="gap-3 items-center">
      <Avatar size="md" src={images[1]} />
      <Avatar size="md" src={images[2]} />
      <Avatar size="md" src={images[3]} />
    </Box>
  </Loading>
  <Loading isLoading={isLoading} loader="wave">
    <Box className="gap-3 items-center">
      <Avatar size="md" src={images[1]} />
      <Avatar size="md" src={images[2]} />
      <Avatar size="md" src={images[3]} />
    </Box>
  </Loading>
  <Loading isLoading={isLoading} loader="spin">
    <Box className="gap-3 items-center">
      <Avatar size="md" src={images[1]} />
      <Avatar size="md" src={images[2]} />
      <Avatar size="md" src={images[3]} />
    </Box>
  </Loading>
  </Box>
 )
};`;
