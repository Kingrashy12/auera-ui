import { StrFun } from "@/utils/fun";
import { Router } from "@/utils/router";
import { Box, Icon } from "auera-ui";
import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";
import { BsSlashLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { tw } from "stywind";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  separator?: "splash" | "arrow";
  itemClass?: string;
  containerClass?: string;
  className?: string;
  disableHref?: string[];
  exclude?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = "arrow",
  itemClass,
  className,
  containerClass,
  disableHref = [],
  exclude,
}) => {
  const separatorType = {
    splash: BsSlashLg,
    arrow: IoIosArrowForward,
  };

  const { pathname } = Router();

  // Split the current URL location by `/` to get the navigation history
  const str = useMemo(
    () => pathname.split("/").filter((w) => w !== ""),
    [pathname]
  );

  // Manage breadcrumb items using state
  const [items, setItems] = useState<BreadcrumbItem[]>([]);

  // A function used for updating breadcrumb array
  const addLink = () => {
    const newItems: BreadcrumbItem[] = [];
    for (let i = 0; i < str.length; i++) {
      const basePath = str[i];
      const redirectPath = str.slice(0, i + 1).join("/");
      newItems.push({
        label: StrFun.capitalize(basePath, "-", " "),
        href: `/${redirectPath}`,
      });
    }
    setItems(newItems); // Update state
  };

  useEffect(() => {
    addLink();
  }, [pathname]);

  return (
    <Box className={tw("gap-1", containerClass as string)}>
      {items
        .filter((item) => item.label !== exclude)
        .map((item, index) => (
          <Box
            key={index}
            className={tw("items-center gap-1", className as string)}
          >
            {index > 0 && (
              <Icon
                size={14}
                className={tw(
                  "text-muted",
                  separator === "splash" ? "-rotate-[10deg]" : ""
                )}
                icon={separatorType[separator]}
              />
            )}

            {item.href ? (
              // Check if the current href is in the disableHref list
              disableHref.includes(item.href) ? (
                <span
                  className={tw(
                    "text-muted font-inter font-medium text-sm",
                    itemClass as string
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={tw(
                    item.href === pathname ? "text-primary" : "text-dim",
                    "font-inter font-medium text-sm",
                    itemClass as string
                  )}
                >
                  {item.label}
                </Link>
              )
            ) : (
              <span
                className={tw(
                  "text-dim font-inter font-medium text-sm",
                  itemClass as string
                )}
              >
                {item.label}
              </span>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default Breadcrumb;
