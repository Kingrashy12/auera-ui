import React from "react";
import { GroupMap, Box, colors, formatDate } from "auera-ui";
import { notifications } from "@/data/notification";
import StatusBadge from "@/components/lib/StatusBadge";

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
        hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 
        transition-all duration-300 ease-in-out shadow-md 
        hover:shadow-lg transform hover:scale-105 mb-2 active:scale-90 drawer-demo-card
      "
        >
          <Box fullWidth className="flex justify-between items-center">
            <p className="font-semibold text-lg text-neutral-800 theme-dark:text-white">
              {item.title}
            </p>
            {!item.seen && (
              <StatusBadge badgeClassName="" placement="right-bottom" />
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
