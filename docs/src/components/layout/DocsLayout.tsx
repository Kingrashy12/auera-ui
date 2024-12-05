import { Box } from "auera-ui";
import React from "react";
import SideBar from "./SideBar";
import PageNavigator from "./PageNavigator";
import TableOfContent from "./TableOfContent";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="gap-0 px-3" fullWidth>
      <SideBar />
      <Box fullWidth direction="column" className="gap-3 px-4 py-2">
        {children}
        <PageNavigator />
      </Box>
      <TableOfContent />
    </Box>
  );
};

export default DocsLayout;
