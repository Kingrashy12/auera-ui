import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Box, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SolidTabs = () => {
  return (
    <Box className="flex-col gap-6">
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <CardContent>
            <Tabs variant="solid">
              <TabHandle value="feed">Feed</TabHandle>
              <TabHandle value="contacts">Contacts</TabHandle>
              <TabHandle value="photos">Photos</TabHandle>
              <TabPanel className="font-inter text-sm theme-dark:text-white">
                Manage your feed
              </TabPanel>
              <TabPanel className="font-inter text-sm theme-dark:text-white">
                Manage your contacts
              </TabPanel>
              <TabPanel className="font-inter text-sm theme-dark:text-white">
                Manage your photos
              </TabPanel>
            </Tabs>
          </CardContent>
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="tabs/solid.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </Box>
  );
};

export default SolidTabs;

const code = `import { TabHandle, TabPanel, Tabs } from "auera-ui"

const Demo = () => {
 return (
  <Tabs variant="solid">
    <TabHandle value="feed">Feed</TabHandle>
    <TabHandle value="contacts">Contacts</TabHandle>
    <TabHandle value="photos">Photos</TabHandle>
    <TabPanel>
      Manage your feed
    </TabPanel>
    <TabPanel>
      Manage your contacts
    </TabPanel>
    <TabPanel>
      Manage your photos
    </TabPanel>
  </Tabs>
 )
};`;
