import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Stack, Switch } from "auera-ui";
import React from "react";

const SwitchVariant = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Stack align="horizontal">
          <Switch variant="padded" />
          <Switch variant="flush" />
        </Stack>
      </TabLayout>
    </CardContent>
  );
};

export default SwitchVariant;

const code = `import { Stack, Switch } from "auera-ui";

export const SwitchVariantDemo = () => {
 return (
  <Stack align='horizontal'>
    <Switch variant="padded" />
    <Switch variant="flush" />
  </Stack>
 )
};`;
