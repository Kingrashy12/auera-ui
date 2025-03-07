import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Skeleton, Stack, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SkeletonDemo = () => {
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
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default SkeletonDemo;

const code = `import { Skeleton, Stack } from "auera-ui";

const Demo = () => {
 return (
  <Stack>
   <Skeleton className="h-4 w-3/4" />
   <Skeleton className="h-4 w-full" />
   <Skeleton className="h-4 w-5/6" />
  </Stack>
 )
}`;
