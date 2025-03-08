import { Box } from "auera-ui";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import PageNavigator from "./PageNavigator";
import TableOfContent from "./TableOfContent";
import { tw } from "stywind";

type Props = { children: React.ReactNode; hideNavigator?: boolean };

const DocsLayout = ({ children, hideNavigator }: Props) => {
  const [HAS_PAGE_RENDERED, setHAS_PAGE_RENDERED] = useState(false);

  useEffect(() => {
    setHAS_PAGE_RENDERED(true);
    localStorage.setItem(
      "HAS_PAGE_RENDERED",
      JSON.stringify(HAS_PAGE_RENDERED)
    );
  }, [HAS_PAGE_RENDERED]);

  return (
    <Box className="gap-0 px-3 max-[550px]:px-0" fullWidth>
      <SideBar />
      <Box
        direction="column"
        fullWidth
        className={tw(
          "gap-8 px-4 py-2 max-[550px]:px-3 overflow-x-hidden",
          hideNavigator && "px-5 py-4"
        )}
      >
        {children}
        <Box
          direction="column"
          className={tw(
            "gap-3 px-3 py-2 max-[550px]:px-2",
            hideNavigator && "hidden"
          )}
        >
          <div className="w-full border-t border-t-sidebar" />
          <PageNavigator />
        </Box>
      </Box>
      {!hideNavigator && <TableOfContent />}
    </Box>
  );
};

export default DocsLayout;
