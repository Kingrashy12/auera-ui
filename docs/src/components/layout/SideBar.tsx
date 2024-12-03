import { linksWithIcon } from "@/data/sidebar";
import { Box, Icon, MapItems } from "auera-ui";
import React, { useState } from "react";
import { createStyle, tw } from "stywind";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/router";
import TextInput from "../lib/SearchInput";

const SideBar = () => {
  const Bar = createStyle("aside").classname(
    "enhanced-scrollbar bg-sidebar border-r flex gap-5 flex-col border-r-sidebar top-16 w-[310px] z-20 h-screen overflow-y-auto p-8 pl-[14px] ps-0 max-lg:hidden sticky"
  );
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <Bar>
      <Box fullWidth>
        <TextInput
          icon={IoSearch}
          iconSize={23}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
        />
      </Box>
      <Box direction="column" fullWidth>
        <MapItems
          direction="column"
          data={linksWithIcon}
          className="gap-3"
          renderItem={(item, index) => (
            <Box
              className={tw(
                "items-center gap-3 hover:text-blue-600",
                item.soon ? "pointer-events-none" : "cursor-pointer",
                router.pathname.startsWith(`/${item.label.toLowerCase()}`)
                  ? "text-blue-600"
                  : "text-text-color"
              )}
              key={index}
            >
              <div className="p-[6px] bg-sideIcon rounded-md border shadow-sm border-sidebar">
                <Icon icon={item.icon} color={item.color} />
              </div>
              <p className="font-inter-tight font-medium text-sm">
                {item.label}
              </p>
              <p
                className={tw(
                  "font-inter-tight font-normal text-dim text-sm",
                  item.soon ? "flex" : "hidden"
                )}
              >
                coming soon!
              </p>
            </Box>
          )}
        />
      </Box>
    </Bar>
  );
};

export default SideBar;
