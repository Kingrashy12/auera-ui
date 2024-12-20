import React from "react";
import {
  Box,
  Button,
  colors,
  Drawer as D,
  DrawerPanelProps,
  DrawerProps,
  IconButton,
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import { notifications } from "@/data/notification";
import { formatTime } from "@/utils/formatTime";
import GroupMap from "@/utils/GroupMap";
import StatusBadge from "@/components/lib/StatusBadge";

const Drawer = ({ position, type }: DrawerProps & DrawerPanelProps) => {
  return (
    <>
      <D value="default">
        <D.Panel position={position} type={type}>
          <D.Header>
            <h1 className="font-medium text-lg">Notifications</h1>
            <D.Trigger type="close" value="">
              <IconButton variants="outline">
                <IoClose />
              </IconButton>
            </D.Trigger>
          </D.Header>
          <D.Content>
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
                  border border-neutral-200 
                  hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 
                  transition-all duration-300 ease-in-out shadow-md 
                  hover:shadow-lg transform hover:scale-105 mb-2 active:scale-90
                "
                >
                  <Box fullWidth className="flex justify-between items-center">
                    <p className="font-semibold text-lg text-neutral-800">
                      {item.title}
                    </p>
                    {!item.seen && (
                      <StatusBadge badgeClassName="" placement="right-bottom" />
                    )}
                  </Box>
                  <span className="text-neutral-600 text-sm">
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
                  {formatTime(new Date(key))}
                </h1>
              )}
            />
          </D.Content>
        </D.Panel>
      </D>
      <D.Trigger value="default">
        <Button>Open Drawer</Button>
      </D.Trigger>
    </>
  );
};

export default Drawer;
