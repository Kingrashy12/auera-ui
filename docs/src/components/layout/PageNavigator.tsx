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
};
const PageNavigator = () => {
  const { pathname } = Router();
  const [prevPage, setPrevPage] = useState<LinkType | null>(null);
  const [nextPage, setNextPage] = useState<LinkType | null>(null);

  useEffect(() => {
    let found = false;
    const getPage = () => {
      for (let i = 0; i < sideBarLinks.length; i++) {
        const currentLinks = sideBarLinks[i].links.filter((link) => !link.soon);

        for (let j = 0; j < currentLinks.length; j++) {
          const page = currentLinks[j];

          if (pathname === page.uri) {
            //Prev page
            if (j > 0) {
              setPrevPage(currentLinks[j - 1]);
            } else setPrevPage(null);

            //Next page
            if (j < currentLinks.length - 1) {
              setNextPage(currentLinks[j + 1]);
            } else setNextPage(null);

            found = true;
            break;
          }
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
            size="lg"
            radius="lg"
            variant="outline"
            className="font-poppins"
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
            size="lg"
            radius="lg"
            variant="outline"
            className="font-poppins"
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
