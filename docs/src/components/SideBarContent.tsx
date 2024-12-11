import React, { useState } from "react";
import { Box, Icon, MapItems, TextInput } from "auera-ui";
import { IoSearch } from "react-icons/io5";
import { linksWithIcon, sideBarLinks } from "@/data/sidebar";
import { tw } from "stywind";
import StatusBadge from "./lib/StatusBadge";
import SideBarLinks from "./layout/SideBarLinks";
import { useRouter } from "next/router";

const SideBarContent = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredLinks = sideBarLinks.filter((links) =>
    links.links.some((link) => {
      const label = link.label.toLowerCase();
      const keyword = query.toLowerCase();

      return label.includes(keyword);
    })
  );

  return (
    <>
      <Box
        fullWidth
        className={tw(
          "sticky flex-shrink-0 px-3 top-0 py-4 bg-sidebar z-20 border-b border-b-sidebar"
        )}
      >
        <TextInput
          icon={IoSearch}
          iconSize={23}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
          type="text"
        />
      </Box>
      <Box direction="column" fullWidth className="gap-8 p-6 pl-3">
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
                  : "text-primary"
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
        <SideBarLinks data={filteredLinks} />
      </Box>
    </>
  );
};

export default SideBarContent;
