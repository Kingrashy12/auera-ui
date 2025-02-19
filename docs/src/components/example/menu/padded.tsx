import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  IconButton,
  Menu,
  MenuDivider,
  MenuItem,
  MenuTrigger,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const PaddedMenu = () => {
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="w-fit">
          <Menu>
            <MenuTrigger>
              <IconButton radius="xl">
                <HiDotsHorizontal size={20} />
              </IconButton>
            </MenuTrigger>
            <MenuItem>View Details</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Share</MenuItem>
            <MenuDivider />
            <MenuItem color="danger" type="padded">
              Delete
            </MenuItem>
          </Menu>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={"code"} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default PaddedMenu;
