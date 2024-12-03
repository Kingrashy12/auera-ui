import { linksWithIcon } from "@/data/sidebar";
import { Box, Icon, MapItems } from "auera-ui";
import React, { useState } from "react";
import { createStyle } from "stywind";
import SearchInput from "../lib/SearchInput";
import { IoSearch } from "react-icons/io5";

const SideBar = () => {
  const Bar = createStyle("aside").classname(
    "enhanced-scrollbar bg-sidebar border-r flex gap-5 flex-col border-r-sidebar top-16 w-[290px] z-20 h-screen overflow-y-auto p-8 ps-0 max-lg:hidden sticky"
  );
  const [query, setQuery] = useState("");
  return (
    <Bar>
      <Box fullWidth>
        <SearchInput
          icon={IoSearch}
          iconSize={23}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
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
            <Box className="items-center gap-3 cursor-pointer" key={index}>
              <div className="p-[6px] bg-white rounded-md border shadow-sm border-sidebar">
                <Icon icon={item.icon} color={item.color} />
              </div>
              <p className="text-text-color font-inter-tight font-medium text-sm">
                {item.label}
              </p>
            </Box>
          )}
        />
      </Box>
    </Bar>
  );
};

export default SideBar;
