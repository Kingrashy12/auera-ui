import React, { useState } from "react";
import { Card, TabsType, Tabs, TextInput } from "auera-ui";
// import TextInput from "@/components/lib/TextInput";

const Tab = ({ variant, ...props }: TabsType) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Card fullWidth className="w-[250px]">
        <Tabs fullWidth variant={variant} {...props} hideScrollBar>
          <Tabs.Handle value="overview">Overview</Tabs.Handle>
          <Tabs.Handle value="settinsg">Settings</Tabs.Handle>
          <Tabs.Handle value="profile">Profile</Tabs.Handle>
          <Tabs.Handle value="security">Security</Tabs.Handle>
          <Tabs.Panel>Overview</Tabs.Panel>
          <Tabs.Panel>Settings</Tabs.Panel>
          <Tabs.Panel>Profile</Tabs.Panel>
          <Tabs.Panel>Security</Tabs.Panel>
        </Tabs>
        <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      </Card>
    </>
  );
};

export default Tab;
