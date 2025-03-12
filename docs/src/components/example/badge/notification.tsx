import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import React from "react";
import { Badge, IconButton } from "auera-ui";
import { HiBell } from "react-icons/hi";

const NotificationBadge = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <IconButton
          variant="outline"
          size="md"
          radius="lg"
          className="relative"
        >
          <HiBell size={20} />
          <Badge colorScheme="red" className="absolute -top-1 -right-1">
            9
          </Badge>
        </IconButton>
      </TabLayout>
    </CardContent>
  );
};

export default NotificationBadge;

const code = `import { Badge, IconButton } from "auera-ui";
import { HiBell } from "react-icons/hi";";

export const BadgeDemo = () => {
 return (
   <IconButton
      variant="outline"
      size="md"
      radius="lg"
    >
     <HiBell size={20} />
     <Badge colorScheme="red" className="absolute -top-1 -right-1">
       9
     </Badge>
    </IconButton>
 )
};`;
