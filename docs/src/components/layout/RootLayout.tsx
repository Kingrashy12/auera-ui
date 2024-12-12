import React from "react";
import MobileMenu from "../Overlays/MobileMenu";
import { Box } from "auera-ui";
import { useRouter } from "next/router";
import MobileSideBar from "../Overlays/MobileSideBar";
import localFont from "next/font/local";
import { tw } from "stywind";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"));
const ToolBar = dynamic(() => import("./ToolBar"));

export const poppins = localFont({
  src: [
    {
      path: "../../fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const inter = localFont({
  src: "../../fonts/Inter-VariableFont_opsz,wght.ttf",
  style: "normal",
  variable: "--font-inter",
});

export const interTight = localFont({
  src: "../../fonts/InterTight-VariableFont_wght.ttf",
  style: "normal",
  variable: "--font-inter-tight",
});

export const montserrat = localFont({
  src: "../../fonts/Montserrat-VariableFont_wght.ttf",
  style: "normal",
  variable: "--font-montserrat",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const singleBar = ["/"];
  return (
    <div
      className={tw(
        "h-full flex flex-col w-full",
        montserrat.variable,
        inter.variable,
        interTight.variable,
        poppins.variable
      )}
      suppressHydrationWarning
    >
      <Box direction="column" fullWidth className="sticky top-0 z-50">
        <Navbar />
        {singleBar.every((route) => route !== router.pathname) && <ToolBar />}
      </Box>
      {children}
      <MobileMenu />
      <MobileSideBar />
    </div>
  );
};

export default RootLayout;
