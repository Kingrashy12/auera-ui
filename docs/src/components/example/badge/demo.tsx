import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Badge } from "auera-ui";
import React from "react";

const BadgeDemo = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Badge>Badge</Badge>
      </TabLayout>
    </CardContent>
  );
};

export default BadgeDemo;

const code = `import { Badge } from "auera-ui";

export const BadgeDemo = () => {
 return <Badge>Badge</Badge>;
};`;
