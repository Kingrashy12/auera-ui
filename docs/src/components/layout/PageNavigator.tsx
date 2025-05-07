import { sideBarLinks } from "@/data/sidebar";
import { Router } from "@/utils/router";
import { Box, IconButton } from "auera-ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { createStyle } from "stywind";

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
    <Box
      fullWidth
      className="items-center justify-between max-[350px]:flex-col gap-6 mb-5"
    >
      {prevPage ? (
        <CustomLink href={prevPage?.uri}>
          <div className="flex items-start justify-start self-start">
            <IconButton variant="outline" radius="full">
              <IoIosArrowBack size={18} />
            </IconButton>
          </div>
          <p className="font-inter text-primary font-medium">
            {prevPage.label}
          </p>
        </CustomLink>
      ) : (
        <div />
      )}
      {nextPage ? (
        <CustomLink
          href={nextPage?.uri}
          className="flex-row-reverse hover:last:translate-x-1"
        >
          <div className="flex items-end justify-end self-end">
            <IconButton variant="outline" radius="full">
              <IoIosArrowForward size={18} />
            </IconButton>
          </div>
          <p className="font-inter text-primary font-medium">
            {nextPage.label}
          </p>
        </CustomLink>
      ) : (
        <div />
      )}
    </Box>
  );
};

export default PageNavigator;

const CustomLink = createStyle(Link).classname(
  "flex items-center gap-3 hover:gap-5 hover:first:-translate-x-1 transition-all duration-400 bg-transparent"
);
