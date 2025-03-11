import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";
import React from "react";

const FabDemo = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Fab type="static">
          <HiMenu size={20} />
        </Fab>
      </TabLayout>
    </CardContent>
  );
};

export default FabDemo;

const code = `import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";

export const Demo = () => {
 return (
  <Fab type="static">
    <HiMenu size={20} />
  </Fab>
 ) 
};`;
