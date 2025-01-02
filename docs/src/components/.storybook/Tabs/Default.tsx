import React from "react";
import { Card, TabsType, Tabs, TabHandle, TabPanel } from "auera-ui";

const Tab = ({ variant, ...props }: TabsType) => {
  return (
    <>
      <Card fullWidth className="w-[250px]">
        <Tabs fullWidth variant={variant} {...props} hideScrollBar>
          <TabHandle value="overview">Overview</TabHandle>
          <TabHandle value="settinsg">Settings</TabHandle>
          <TabHandle value="profile">Profile</TabHandle>
          <TabHandle value="security">Security</TabHandle>
          <TabPanel>Overview</TabPanel>
          <TabPanel>Settings</TabPanel>
          <TabPanel>Profile</TabPanel>
          <TabPanel>Security</TabPanel>
        </Tabs>
      </Card>
    </>
  );
};

export default Tab;
