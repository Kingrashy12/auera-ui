import { sideBarLinks } from "@/data/sidebar";
import { Router } from "@/utils/router";
import { Box, Button } from "auera-ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type LinkType = {
  uri: string;
  soon?: boolean;
  label: string;
  docs_soon?: boolean;
};
const PageNavigator = () => {
  const { pathname } = Router();
  const [prevPage, setPrevPage] = useState<LinkType | null>(null);
  const [nextPage, setNextPage] = useState<LinkType | null>(null);

  useEffect(() => {
    let found = false;
    const links: LinkType[] = [];
    const getPage = () => {
      for (let i = 0; i < sideBarLinks.length; i++) {
        const currentLinks = sideBarLinks[i].links.filter((link) => !link.soon);
        links.push(...currentLinks);
      }

      for (let j = 0; j < links.length; j++) {
        const page = links[j];

        if (pathname === page.uri) {
          //Prev page
          if (j > 0) {
            setPrevPage(links[j - 1]);
          } else setPrevPage(null);

          //Next page
          if (j < links.length - 1) {
            setNextPage(links[j + 1]);
          } else setNextPage(null);

          found = true;
          break;
        }

        if (found) break;
      }
    };
    getPage();
  }, [pathname]);
  return (
    <Box fullWidth className="items-center justify-between">
      {prevPage ? (
        <Link href={prevPage?.uri}>
          <Button
            leftIcon={IoIosArrowBack}
            radius="full"
            size="lg"
            variant="ghost"
          >
            {prevPage.label}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link href={nextPage?.uri}>
          <Button
            rightIcon={IoIosArrowForward}
            radius="full"
            size="lg"
            variant="ghost"
          >
            {nextPage.label}
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </Box>
  );
};

export default PageNavigator;
