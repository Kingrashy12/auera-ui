import { sideBarLinks } from "@/data/sidebar";
import { Badge, Box, closeDrawer, MapItems } from "auera-ui";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { tw } from "stywind";
import Link from "next/link";
import { HiArchive } from "react-icons/hi";

type Data = {
  uri: string;
  label: string;
  soon?: boolean;
  docs_soon?: boolean;
  updated?: boolean;
};

const EmptyList = () => (
  <Box className="items-center gap-1" fullWidth direction="column">
    <HiArchive size={40} className="text-muted" />
    <h3 className="text font-semibold">Nothing is here</h3>
  </Box>
);

const SideBarLinks = ({ data }: { data: typeof sideBarLinks }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const sortedItems = (data: Data[]) =>
    data.sort((a, b) => a.label.localeCompare(b.label));
  const router = useRouter();
  const { slug } = router.query;

  const getActiveLink = (uri: string) => {
    const current = router.pathname.split("[slug]").join(`${slug}`);
    const isActive = uri === current ? true : false;
    return isActive;
  };

  useEffect(() => {
    const current = router.pathname.split("[slug]").join(`${slug}`);

    Array.from(document.querySelectorAll("a")).find((element) => {
      const isLocal = element.href.startsWith(window.location.origin);
      const baseURL = isLocal
        ? window.location.origin
        : "https://aueraui.vercel.app";
      const cleanedHref = element.href.replace(baseURL, "");

      if (cleanedHref === current && linkRef.current) {
        // Scroll into view
        element.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    });
  }, [router.pathname, slug]);

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
            className="ml-0 border-l-2 border-l-sidebar gap-0"
            renderItem={(link) => (
              <Link
                href={link.uri}
                key={link.uri}
                onClick={() => closeDrawer()}
                ref={linkRef}
                className={tw(
                  "w-full py-2 px-3 -ml-0.5 hover:text-blue-600 hover:border-l-2 hover:border-blue-600 flex justify-between transition-transform duration-300",
                  getActiveLink(link.uri)
                    ? "border-l-2 text-blue-600 border-l-blue-600"
                    : "text-dimBlack",
                  link.soon || link.docs_soon
                    ? "cursor-not-allowed pointer-events-none opacity-75"
                    : "cursor-pointer"
                )}
              >
                <p className="font-inter font-medium text-sm">{link.label}</p>
                <Badge
                  variant="soft"
                  colorScheme="yellow"
                  className={tw(
                    link.soon && !link.docs_soon ? "block" : "hidden"
                  )}
                >
                  Soon
                </Badge>

                <Badge
                  variant="soft"
                  colorScheme="blue"
                  className={tw(link.docs_soon ? "block" : "hidden")}
                >
                  Soon
                </Badge>

                <Badge
                  variant="soft"
                  colorScheme="blue"
                  // show={Boolean(link.updated)}
                  className={tw(link.updated ? "block" : "hidden")}
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
