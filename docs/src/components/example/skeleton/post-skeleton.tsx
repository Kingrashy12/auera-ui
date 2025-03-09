import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  Avatar,
  Box,
  Card,
  Image,
  Skeleton,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const PostSkeleton = () => {
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
          <Card classNames={{ root: "rounded-xl w-[350px] max-w-[95%]" }}>
            <Box centered between>
              <Box centered className="gap-3">
                <Avatar isLoading size="md" />
                <Box className="flex-col gap-2">
                  <Skeleton width={90} height={10} />
                  <Skeleton width={80} height={9} />
                </Box>
              </Box>
              <Skeleton className="h-7 w-28" radius="md" />
            </Box>
            <Image
              alt="Post Image"
              isLoading
              className="w-full h-20"
              radius="md"
            />
            <Skeleton className="w-full h-[36px]" radius="md" />
            <Skeleton className="w-full h-5" radius="md" />
          </Card>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default PostSkeleton;

const code = `import { Card, Skeleton, Image } from "auera-ui";

const Demo = () => {
 return (
  <Card classNames={{ root: "rounded-xl w-[350px] max-w-[95%]" }}>
     <Box centered between>
       <Box centered className="gap-3">
         <Avatar isLoading size="md" />
         <Box className="flex-col gap-2">
           <Skeleton width={10} height={10} />
           <Skeleton width={80} height={9} />
         </Box>
       </Box>
       <Skeleton className="h-7 w-20" radius="md" />
     </Box>
     <Image
      alt="Post Image"
      isLoading
      className="w-full h-20"
      radius="md"
    />
    <Skeleton className="w-full h-[36px]" radius="md" />
    <Skeleton className="w-full h-5" radius="md" />
  </Card>
 )
}`;
