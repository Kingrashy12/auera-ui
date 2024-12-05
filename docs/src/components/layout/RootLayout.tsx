import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "../Overlays/MobileMenu";
import { Box } from "auera-ui";
import ToolBar from "./ToolBar";
import { useRouter } from "next/router";
import MobileSideBar from "../Overlays/MobileSideBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const singleBar = ["/"];
  return (
    <Box direction="column" fullWidth className="h-full">
      <Box direction="column" fullWidth className="sticky top-0 z-50">
        <Navbar />
        {singleBar.every((route) => route !== router.pathname) && <ToolBar />}
      </Box>
      {children}
      <MobileMenu />
      <MobileSideBar />
    </Box>
  );
};

export default RootLayout;
