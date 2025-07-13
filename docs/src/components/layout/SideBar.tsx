import { createStyle } from "stywind";
import SideBarContent from "../SideBarContent";

const SideBar = () => {
  const Bar = createStyle("aside").classname(
    "bg-sidebar border-r flex flex-col select-open:overflow-y-hidden border-r-sidebar top-16 w-[260px] shrink-0 z-20 h-[90vh] max-[1168px]:hidden sticky"
  );

  return (
    <Bar>
      <SideBarContent />
    </Bar>
  );
};

export default SideBar;
