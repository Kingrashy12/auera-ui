// import { linksWithIcon } from "@/data/sidebar";
// import { Box, Icon, MapItems } from "auera-ui";
// import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/router";
// import TextInput from "../lib/SearchInput";
// import SideBarLinks from "./SideBarLinks";
// import StatusBadge from "../lib/StatusBadge";
import React from "react";
import { createStyle } from "stywind";
import SideBarContent from "../SideBarContent";

const SideBar = () => {
  const Bar = createStyle("aside").classname(
    "bg-sidebar border-r flex gap-5 flex-col border-r-sidebar top-16 w-[260px] flex-shrink-0 z-20 h-[90vh] overflow-y-auto p-8 pl-3 max-lg:hidden sticky"
  );

  return (
    <Bar>
      <SideBarContent />
    </Bar>
  );
};

export default SideBar;
