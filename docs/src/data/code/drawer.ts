const drawer_overlays = {
  demo: `import {
  Drawer,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  IconButton,
  closeDrawer
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "../example/DrawerContent";

const DemoDrawer = () => {
  return (
    <Drawer value="drawer-demo">
      <DrawerPanel>
        <DrawerHeader>
          <h1 className="font-medium text-lg theme-dark:text-white">
            Notifications
          </h1>
          <IconButton onClick={closeDrawer} variant="outline">
            <IoClose />
          </IconButton>
        </DrawerHeader>
        <DrawerContent>
          <Drawer_Content />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default DemoDrawer;`,
  type: `import {
  Drawer,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  IconButton,
  closeDrawer
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "../example/DrawerContent";

const FloatDemoDrawer = () => {
  return (
    <Drawer value="drawer-demo-float">
      <DrawerPanel type="float">
        <DrawerHeader>
          <h1 className="font-medium text-lg theme-dark:text-white">
            Notifications
          </h1>
          <IconButton onClick={closeDrawer} variant="outline">
            <IoClose />
          </IconButton>
        </DrawerHeader>
        <DrawerContent>
          <Drawer_Content />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default FloatDemoDrawer;`,
  position: `import {
  Drawer,
  DrawerPanel,
  DrawerHeader,
  DrawerContent,
  IconButton,
  closeDrawer
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import Drawer_Content from "../example/DrawerContent";

const LeftDrawer = () => {
  return (
    <Drawer value="left-drawer-demo">
      <DrawerPanel position="left">
        <DrawerHeader>
          <h1 className="font-medium text-lg theme-dark:text-white">
            Notifications
          </h1>
          <IconButton onClick={closeDrawer} variant="outline">
            <IoClose />
          </IconButton>
        </DrawerHeader>
        <DrawerContent>
          <Drawer_Content />
        </DrawerContent>
      </DrawerPanel>
    </Drawer>
  );
};

export default LeftDrawer;`,
};

export const drawer_codes = {
  demo: `import { Stack, Button, openDrawer } from "auera-ui";
 
const DrawerDemo = () => {
   return (
    <Stack>
      <Button onClick={() => openDrawer("drawer-demo")}>
         Open drawer
      </Button>
    </Stack>
   )
 };`,
  trigger: `import { Stack, Button, DrawerTrigger } from "auera-ui";
 
const DrawerDemo = () => {
   return (
    <Stack>
     <DrawerTrigger value="drawer-demo">
      <Button>Open drawer</Button>
     </DrawerTrigger> 
    </Stack>
   )
 };`,
  types: `import { Stack, Button, openDrawer } from "auera-ui";
 
const DrawerDemo = () => {
   return (
    <Stack>
      <Button onClick={() => openDrawer("drawer-demo")}>
        Open sticky drawer
      </Button>
      <Button onClick={() => openDrawer("drawer-demo-float")}>
        Open float drawer
      </Button>
    </Stack>
   )
 };`,
  position: `import { Stack, Button, openDrawer } from "auera-ui";
 
const LeftDrawerDemo = () => {
   return (
    <Stack>
      <Button onClick={() => openDrawer("left-drawer-demo")}>
         Open left drawer
       </Button>
       <Button onClick={() => openDrawer("drawer-demo")}>
         Open right drawer
       </Button>
    </Stack>
   )
 };`,
  overlays: drawer_overlays,
};

export const drawer_content = `import React from "react";
import { GroupMap, Box, colors, StatusBadge, formatDate } from "auera-ui";
import { notifications } from "@/data/notification";

const Drawer_Content = () => {
  return (
    <GroupMap
      data={notifications}
      className="gap-3"
      dataMapClass="gap-3"
      renderItem={(item, index) => (
        <Box
          key={index}
          direction="column"
          className="
        gap-2 p-4 rounded-xl cursor-pointer 
        border border-neutral-200 theme-dark:border-neutral-700
        hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 
        transition-all duration-300 ease-in-out shadow-md 
        hover:shadow-lg transform hover:scale-105 mb-2 active:scale-90 drawer-demo-card
      "
        >
          <Box fullWidth className="flex justify-between items-center">
            <p className="font-semibold text-lg text-neutral-800 theme-dark:text-white">
              {item.title}
            </p>
            {!item.seen && (
              <StatusBadge placement="right-bottom" />
            )}
          </Box>
          <span className="text-neutral-600 text-sm theme-dark:text-neutral-500">
            {item.message}
          </span>
        </Box>
      )}
      groupByKey={(item) => item.timestamp}
      showKeyOnHead
      renderKey={(key) => (
        <h1
          className="font-medium text-md"
          style={{ color: colors.neutral[500] }}
        >
          {formatDate({ date: new Date(key), format: "ddd-mmm-dd" })}
        </h1>
      )}
    />
  );
};

export default Drawer_Content;
`;
