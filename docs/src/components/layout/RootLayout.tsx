import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "../Overlays/MobileMenu";
import { Box } from "auera-ui";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box direction="column" fullWidth className="h-full">
      <Navbar />
      {children}
      <MobileMenu />
    </Box>
  );
};

export default RootLayout;
