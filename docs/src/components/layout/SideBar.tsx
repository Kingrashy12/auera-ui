import { createStyle } from "stywind";
import SideBarContent from "../SideBarContent";

const SideBar = () => {
  const Bar = createStyle("aside").classname(
    "bg-sidebar border-r flex gap-1 flex-col border-r-sidebar top-16 w-[260px] flex-shrink-0 z-20 h-[90vh] overflow-y-auto max-lg:hidden sticky"
  );

  return (
    <Bar>
      <SideBarContent />
    </Bar>
  );
};

export default SideBar;
