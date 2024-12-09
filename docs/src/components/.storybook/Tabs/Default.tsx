import React from "react";
import Tabs from "../../lib/Tabs/Tabs";
import { Card, TabsType } from "auera-ui";

const Tab = ({ variant, ...props }: TabsType) => {
  return (
    <Card fullWidth className="w-[250px]">
      <Tabs fullWidth variant={variant} {...props}>
        <Tabs.Handle value="overview">Overview</Tabs.Handle>
        <Tabs.Handle value="settinsg">Settings</Tabs.Handle>
        <Tabs.Handle value="profile">Profile</Tabs.Handle>
        <Tabs.Handle value="security">Security</Tabs.Handle>
        <Tabs.Panel>Overview</Tabs.Panel>
        <Tabs.Panel>Settings</Tabs.Panel>
        <Tabs.Panel>Profile</Tabs.Panel>
        <Tabs.Panel>Security</Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default Tab;
