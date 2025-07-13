import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Badge, StatusBadge } from "auera-ui";
import React from "react";

const BadgeWithIndicator = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Badge asDiv variant="soft" colorScheme="green">
          <StatusBadge badgeClassName="!relative w-[9px]! h-[9px]!" size="md" />
          Badge
        </Badge>
      </TabLayout>
    </CardContent>
  );
};

export default BadgeWithIndicator;

const code = `import { Badge, StatusBadge } from "auera-ui";

export const BadgeDemo = () => {
 return (
  <Badge asDiv variant="soft" colorScheme="green">
    <StatusBadge badgeClassName="relative" size="sm" />
    Badge
  </Badge>
 )
};`;
