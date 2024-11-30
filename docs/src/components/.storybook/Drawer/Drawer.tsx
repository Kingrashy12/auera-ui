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
import "auera-ui/dist/auera.css";
import StatusBadge from "@/components/lib/StatusBadge";

const Drawer = ({ position, type }: DrawerProps & DrawerPanelProps) => {
  return (
    <>
      <D value="default">
        <D.Panel position={position} type={type}>
          <D.Header>
            <h1 className="font-medium text-lg">Notification</h1>
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
              renderItem={(item, index) => (
                <Box
                  key={index}
                  direction="column"
                  className="gap-1 border-b border-b-neutral-300"
                >
                  <p className="font-medium">{item.title}</p>
                  <StatusBadge badgeClassName="right-0">
                    <span>{item.message}</span>
                  </StatusBadge>
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
