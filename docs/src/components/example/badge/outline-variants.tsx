import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Badge, For } from "auera-ui";
import React from "react";

const OutlineVariants = () => {
  return (
    <CardContent>
      <TabLayout code={code} className="flex flex-wrap gap-3">
        <For
          each={[
            "blue",
            "red",
            "yellow",
            "green",
            "neutral",
            "thick",
            "teal",
            "gray",
          ]}
          render={(color) => (
            <Badge variant="outline" colorScheme={color as never}>
              Badge
            </Badge>
          )}
        />
      </TabLayout>
    </CardContent>
  );
};

export default OutlineVariants;

const code = `import { Badge, For, Box } from "auera-ui";

export const BadgeDemo = () => {
 return (
  <Box className="flex flex-wrap gap-3">
   <For
     each={[
       "blue",
       "red",
       "yellow",
       "green",
       "neutral",
       "thick",
       "teal",
       "gray",
     ]}
     render={(color) => (
      <Badge variant="outline" colorScheme={color}>
        Badge
      </Badge>
     )}
    />
  </Box>
 )
};`;
