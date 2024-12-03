import { Box } from "auera-ui";
import React from "react";
import SideBar from "./SideBar";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="gap-3 px-2" fullWidth>
      <SideBar />
      <Box fullWidth direction="column" className="gap-3">
        {children}
        {/* <div>Page Navigator</div> */}
      </Box>
    </Box>
  );
};

export default DocsLayout;
