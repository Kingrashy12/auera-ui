import { getDisplayName } from "@/utils/displayname";
import { forwardRef } from "react";

const TabPanel = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

export default TabPanel;
TabPanel.displayName = getDisplayName("TabPanel");
