import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import {
  IconButton,
  Menu,
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

const MenuDemo = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3 w-fit">
          <Menu>
            <MenuTrigger>
              <IconButton radius="xl">
                <HiDotsHorizontal size={20} />
              </IconButton>
            </MenuTrigger>
            <MenuItem>View Details</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem color="danger">Delete</MenuItem>
            <MenuItem>Share</MenuItem>
          </Menu>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="demo.tsx" code={code} lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default MenuDemo;

const code = `import {
  IconButton,
  Menu,
  MenuItem,
  MenuTrigger,
} from "auera-ui";
import { HiDotsHorizontal } from "react-icons/hi";

const Demo = () => {
 return (
  <Menu>
    <MenuTrigger>
      <IconButton radius="xl">
        <HiDotsHorizontal size={20} />
      </IconButton>
    </MenuTrigger>
    <MenuItem>View Details</MenuItem>
    <MenuItem>Edit</MenuItem>
    <MenuItem color="danger">Delete</MenuItem>
    <MenuItem>Share</MenuItem>
  </Menu>
 )
};`;
