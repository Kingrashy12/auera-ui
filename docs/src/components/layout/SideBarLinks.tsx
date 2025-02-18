import { sideBarLinks } from "@/data/sidebar";
import { Box, closeDrawer, MapItems } from "auera-ui";
import { useRouter } from "next/router";
import React from "react";
import { tw } from "stywind";
import Badge from "./Badge";
import Link from "next/link";
import { HiArchive } from "react-icons/hi";

type Data = {
  uri: string;
  label: string;
  soon?: boolean;
  updated?: boolean;
};

const EmptyList = () => (
  <Box className="items-center gap-1" fullWidth direction="column">
    <HiArchive size={40} className="text-muted" />
    <h3 className="text font-semibold">Nothing is here</h3>
  </Box>
);

const SideBarLinks = ({ data }: { data: typeof sideBarLinks }) => {
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
      data={data}
      direction="column"
      className="gap-4"
      renderItem={(item, index) => (
        <Box key={index} className="gap-1" direction="column">
          <h4 className="font-inter text-primary text-sm font-semibold">
            {item.header}
          </h4>
          <MapItems
            data={sortedItems(item.links)}
            direction="column"
            className="ml-2 border-l-sidebar gap-0"
            renderItem={(link) => (
              <Link
                href={link.uri}
                key={link.uri}
                onClick={() => closeDrawer()}
                className={tw(
                  "w-full py-2 px-3 hover:text-blue-600 hover:border-l-1.7 flex justify-between transition-transform duration-300",
                  getActiveLink(link.uri)
                    ? "border-l-1.7 text-blue-600 border-l-blue-600"
                    : "text-dimBlack",
                  link.soon
                    ? "cursor-not-allowed pointer-events-none opacity-75"
                    : "cursor-pointer"
                )}
              >
                <p className="font-inter font-medium text-sm">{link.label}</p>
                <Badge
                  variant="ghost"
                  colorScheme="warning"
                  show={link.soon as boolean}
                >
                  Soon
                </Badge>
                <Badge
                  variant="solid"
                  colorScheme="primary"
                  show={link.updated as boolean}
                >
                  Updated
                </Badge>
              </Link>
            )}
          />
        </Box>
      )}
      emptyListComponent={<EmptyList />}
    />
  );
};

export default SideBarLinks;
