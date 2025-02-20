import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Box, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { FaPhotoFilm } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const TabsWithIcon = () => {
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
            <Tabs>
              <TabHandle icon={CgFeed} value="feed">
                Feed
              </TabHandle>
              <TabHandle icon={BsPeopleFill} value="contacts">
                Contacts
              </TabHandle>
              <TabHandle icon={FaPhotoFilm} value="photos">
                Photos
              </TabHandle>
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
          <CodeBlock code={code} fileName="tabs/demo.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </Box>
  );
};

export default TabsWithIcon;

const code = `import { TabHandle, TabPanel, Tabs } from "auera-ui"
import { BsPeopleFill } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";
import { FaPhotoFilm } from "react-icons/fa6";

const Demo = () => {
 return (
  <Tabs>
    <TabHandle icon={CgFeed} value="feed">
      Feed
    </TabHandle>
    <TabHandle icon={BsPeopleFill} value="contacts">
      Contacts
    </TabHandle>
    <TabHandle icon={FaPhotoFilm} value="photos">
      Photos
    </TabHandle>
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
