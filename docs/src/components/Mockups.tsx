import { mockups } from "@/data/mockups";
import { Box, MapItems } from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tw } from "stywind";
import CardContent from "./lib/CardContent";

const Mockups = () => {
  const sortedItems = mockups.sort((a, b) => a.label.localeCompare(b.label));
  return (
    <MapItems
      data={sortedItems}
      className="flex-wrap gap-7 max-[711px]:flex-col overflow-y-hidden"
      renderItem={(item, index) => (
        <Link
          href={item.uri}
          key={index}
          className={tw(
            "flex items-center justify-center flex-col gap-3",
            item.soon && "pointer-events-none cursor-not-allowed"
          )}
        >
          <CardContent
            key={index}
            className={tw(
              `w-[214px] max-[768px]:w-[195px] cursor-pointer rounded-md items-center justify-center bg-gray-100 hover:bg-gray-200
               theme-dark:hover:bg-neutral-900 max-[712px]:w-[185px] max-[711px]:w-full h-[200px] p-0`,
              item.soon &&
                "cursor-not-allowed pointer-events-none bg-neutral-300"
            )}
          >
            <Box className="py-6 px-5" centered>
              <Image
                src={item.image}
                alt={item.label}
                width={item.size}
                height={item.size}
              />
            </Box>
          </CardContent>
          <p className="font-inter font-medium text-sm theme-dark:text-white">
            {item.label}
          </p>
        </Link>
      )}
    />
  );
};

export default Mockups;
