import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";
import React from "react";

const FabVariants = () => {
  return (
    <CardContent>
      <TabLayout code={code} className="space-x-4 inline-flex">
        <Fab type="static">
          <HiMenu size={20} />
        </Fab>
        <Fab type="static" variant="soft">
          <HiMenu size={20} />
        </Fab>
        <Fab type="static" variant="outline">
          <HiMenu size={20} />
        </Fab>
      </TabLayout>
    </CardContent>
  );
};

export default FabVariants;

const code = `import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";

export const Demo = () => {
 return (
  <div className="space-x-4 inline-flex">
   <Fab type="static">
      <HiMenu size={20} />
    </Fab>
    <Fab type="static" variant="soft">
      <HiMenu size={20} />
    </Fab>
    <Fab type="static" variant="outline">
      <HiMenu size={20} />
    </Fab>
  </div>
 ) 
};`;
