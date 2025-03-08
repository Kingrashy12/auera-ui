import React, { useEffect, useState } from "react";
import {
  Box,
  DrawerTrigger,
  Icon,
  MapItems,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  TextInput,
} from "auera-ui";
import { IoSearch } from "react-icons/io5";
import { linksWithIcon, sideBarLinks } from "@/data/sidebar";
import { tw } from "stywind";
import StatusBadge from "./lib/StatusBadge";
import SideBarLinks from "./layout/SideBarLinks";
import { useRouter } from "next/router";
import Link from "next/link";
import { langs } from "@/data/app.data";
import { useDocState } from "@/hooks/docs";
import { BaseLangStruct } from "@/types/global";

const SideBarContent = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [menuLinks, setMenuLinks] = useState(sideBarLinks);
  const { slug } = router.query;
  const { lang: language, updateLang } = useDocState();

  const getActiveLink = (uri: string) => {
    const current = router.pathname.split("[slug]").join(`${slug}`);
    const isActive = uri === current ? true : false;
    return isActive;
  };

  useEffect(() => {
    const result: typeof sideBarLinks = sideBarLinks
      .map((currentGroup) => {
        const queried = currentGroup.links.filter((link) => {
          const label = link.label.toLowerCase();
          const keyword = query.toLowerCase();

          return label.includes(keyword);
        });
        return { header: currentGroup.header, links: queried };
      })
      .filter((item) => item.links.length !== 0);

    setMenuLinks(result);
  }, [query]);

  return (
    <>
      <Box
        fullWidth
        className="sticky flex-shrink-0 px-3 top-0 py-4 bg-sidebar z-20 border-b border-b-sidebar"
      >
        <TextInput
          icon={IoSearch}
          iconSize={23}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
          type="text"
        />
      </Box>
      <Box direction="column" fullWidth className="gap-8 p-6 pl-3">
        <Select>
          <SelectTrigger placeholder="">
            <Box className="items-center gap-1">
              <Icon icon={language.icon} size={28} color={language.color} />

              <p className="font-medium theme-dark:text-white font-inter text-sm">
                {language.name}
              </p>
            </Box>
          </SelectTrigger>
          <SelectContent className="z-900" variant="padded">
            {langs.map((lang, index) => (
              <SelectItem
                key={index}
                value={lang.name}
                isCurrent={lang.name === language.name}
                onSelect={() => updateLang(lang as BaseLangStruct)}
              >
                <Box className="items-center gap-1">
                  <Icon icon={lang.icon} size={28} color={lang.color} />

                  <p className="font-medium theme-dark:text-white font-inter text-sm">
                    {lang.name}
                  </p>
                </Box>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <MapItems
          direction="column"
          data={linksWithIcon}
          className="gap-3"
          renderItem={(item, index) => (
            <DrawerTrigger
              key={index}
              value="tool-bar"
              type="close"
              className={tw(
                "items-center gap-3 flex w-full hover:text-blue-600 justify-between",
                item.soon ? "pointer-events-none" : "cursor-pointer",
                getActiveLink(item.href) ? "text-blue-600" : "text-primary"
              )}
            >
              <Link
                href={item.href}
                className={tw(
                  "items-center gap-3 flex w-full hover:text-blue-600 justify-between",
                  item.soon ? "pointer-events-none" : "cursor-pointer",
                  getActiveLink(item.href) ? "text-blue-600" : "text-primary"
                )}
                key={index}
              >
                <Box className="items-center gap-3">
                  <div className="p-[6px] bg-sideIcon rounded-md border shadow-sm border-sidebar">
                    <Icon icon={item.icon} color={item.color} />
                  </div>
                  <p className="font-inter font-medium text-sm">{item.label}</p>
                </Box>
                {item.soon && (
                  <StatusBadge
                    status="away"
                    badgeClassName="relative"
                    animate
                  />
                )}
              </Link>
            </DrawerTrigger>
          )}
        />

        <SideBarLinks data={menuLinks} />
      </Box>
    </>
  );
};

export default SideBarContent;
