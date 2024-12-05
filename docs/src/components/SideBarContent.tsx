import React, { useState } from "react";
import TextInput from "./lib/SearchInput";
import { Box, Icon, MapItems } from "auera-ui";
import { IoSearch } from "react-icons/io5";
import { linksWithIcon } from "@/data/sidebar";
import { tw } from "stywind";
import StatusBadge from "./lib/StatusBadge";
import SideBarLinks from "./layout/SideBarLinks";
import { useRouter } from "next/router";

const SideBarContent = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <>
      <Box fullWidth>
        <TextInput
          icon={IoSearch}
          iconSize={23}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
          type="text"
        />
      </Box>
      <Box direction="column" fullWidth className="gap-8 mt-4">
        <MapItems
          direction="column"
          data={linksWithIcon}
          className="gap-3"
          renderItem={(item, index) => (
            <Box
              className={tw(
                "items-center gap-3 hover:text-blue-600 justify-between",
                item.soon ? "pointer-events-none" : "cursor-pointer",
                router.pathname.startsWith(`/${item.label.toLowerCase()}`)
                  ? "text-blue-600"
                  : "text-text-color"
              )}
              key={index}
              fullWidth
            >
              <Box className="items-center gap-3">
                <div className="p-[6px] bg-sideIcon rounded-md border shadow-sm border-sidebar">
                  <Icon icon={item.icon} color={item.color} />
                </div>
                <p className="font-inter-tight font-medium text-sm">
                  {item.label}
                </p>
              </Box>
              {item.soon && (
                <StatusBadge status="away" badgeClassName="relative" animate />
              )}
            </Box>
          )}
        />
        <SideBarLinks />
      </Box>
    </>
  );
};

export default SideBarContent;
