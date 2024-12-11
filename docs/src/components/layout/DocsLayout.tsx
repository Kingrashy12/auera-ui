import { Box } from "auera-ui";
import React from "react";
import SideBar from "./SideBar";
import PageNavigator from "./PageNavigator";
import TableOfContent from "./TableOfContent";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="gap-0 px-3 max-[550px]:px-0" fullWidth>
      <SideBar />
      <Box
        fullWidth
        direction="column"
        className="gap-8 px-4 py-2 max-[550px]:px-3"
      >
        {children}
        <Box direction="column" className="gap-3 px-3 py-2 max-[550px]:px-2">
          <div className="w-full border-t border-t-sidebar" />
          <PageNavigator />
        </Box>
      </Box>
      <TableOfContent />
    </Box>
  );
};

export default DocsLayout;
