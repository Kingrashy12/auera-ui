import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "../Overlays/MobileMenu";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <MobileMenu />
    </>
  );
};

export default RootLayout;
