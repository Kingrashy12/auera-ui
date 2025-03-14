import { useRouter } from "@/hook";
import { StrFun } from "@/utils/fun";
import React, { useState, useMemo, useEffect } from "react";
import { BsSlashLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { tw } from "stywind";
import Box from "../Box/Box";
import Icon from "../Icon/Icon";
import { DynamicBreadcrumbProps } from "../../types/auera-ui";

interface DynamicBreadcrumbItem {
  label: string;
  href?: string;
}

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({
  separator = "arrow",
  itemClass,
  className,
  containerClass,
  disableHref = [],
  exclude,
  replacePath = [],
}) => {
  const separatorType = {
    splash: BsSlashLg,
    arrow: IoIosArrowForward,
  };

  const { router } = useRouter();

  const str = useMemo(
    () => router.pathname.split("/").filter((w) => w !== ""),
    [router.pathname]
  );

  const [items, setItems] = useState<DynamicBreadcrumbItem[]>([]);

  const addLink = () => {
    const newItems: DynamicBreadcrumbItem[] = [];
    for (let i = 0; i < str.length; i++) {
      const basePath = str[i];
      const redirectPath = str.slice(0, i + 1).join("/");
      newItems.push({
        label: StrFun.capitalize(basePath, "-", " "),
        href: `/${redirectPath}`,
      });
    }
    setItems(newItems);
  };

  useEffect(() => {
    addLink();
  }, [router.pathname]);

  useEffect(() => {
    if (replacePath.length > 0) {
      setItems((prevItems) =>
        prevItems.map((item) => {
          const replacement = replacePath.find(
            (path) => item.label === path.for
          );
          return replacement ? { ...item, href: replacement.path } : item;
        })
      );
    }
  }, [replacePath]);

  return (
    <Box className={tw("gap-1", containerClass)}>
      {items
        .filter((item) => item.label !== exclude)
        .map((item, index) => (
          <Box key={index} className={tw("items-center gap-1", className)}>
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
              disableHref.includes(item.href) ? (
                <span
                  className={tw(
                    "text-muted font-inter font-medium text-sm",
                    itemClass
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className={tw(
                    item.href === router.pathname
                      ? "text-primary pointer-events-none cursor-text"
                      : "text-muted",
                    "font-inter font-medium text-sm",
                    itemClass
                  )}
                >
                  {item.label}
                </a>
              )
            ) : (
              <span
                className={tw(
                  "text-muted font-inter font-medium text-sm",
                  itemClass
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

export default DynamicBreadcrumb;
