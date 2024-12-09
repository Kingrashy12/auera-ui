import { sideBarLinks } from "@/data/sidebar";
import { Box, MapItems } from "auera-ui";
import { useRouter } from "next/router";
import React from "react";
import { tw } from "stywind";
import Badge from "./Badge";
import Link from "next/link";

// dim light:#585D77
// dim dark:#AAA7B2
const SideBarLinks = () => {
  type Data = {
    uri: string;
    label: string;
    soon?: boolean;
  };

  const sortedItems = (data: Data[]) =>
    data.sort((a, b) => a.label.localeCompare(b.label));
  const router = useRouter();
  const { slug } = router.query;
  const getActiveLink = (uri: string) => {
    const current = router.pathname.split("[slug]").join(`${slug}`);
    const isActive = uri === current ? true : false;
    return isActive;
  };
  return (
    <MapItems
      data={sideBarLinks}
      direction="column"
      renderItem={(item, index) => (
        <Box key={index} className="gap-2" direction="column">
          <h4 className="font-montserrat text-text-color text-sm font-semibold">
            {item.header}
          </h4>
          <MapItems
            data={sortedItems(item.links)}
            direction="column"
            className="ml-1 border-l border-l-sidebar !gap-0"
            renderItem={(link) => (
              // <Link href={link.uri}>
              <Link
                href={link.uri}
                key={link.uri}
                className={tw(
                  "w-full py-2 px-3 hover:text-blue-600 hover:border-l-2 flex justify-between transition-transform duration-300",
                  getActiveLink(link.uri)
                    ? "border-l-2 text-blue-600 border-l-blue-600"
                    : "text-dimBlack",
                  link.soon
                    ? "cursor-not-allowed pointer-events-none opacity-75"
                    : "cursor-pointer"
                )}
              >
                <p className="font-inter font-medium text-sm">{link.label}</p>
                <Badge show={link.soon as boolean} colorScheme="warning">
                  Soon
                </Badge>
              </Link>
              // </Link>
            )}
          />
        </Box>
      )}
    />
  );
};

export default SideBarLinks;
