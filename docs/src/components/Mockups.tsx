import { mockups } from "@/data/mockups";
import { Box, Card, MapItems } from "auera-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tw } from "stywind";
import Badge from "./layout/Badge";

const Mockups = () => {
  const sortedItems = mockups.sort((a, b) => a.label.localeCompare(b.label));
  return (
    <MapItems
      data={sortedItems}
      className="!flex-wrap !gap-5 max-[380px]:flex-col"
      renderItem={(item, index) => (
        <Link
          href={item.uri}
          key={index}
          className={item.soon ? "pointer-events-none" : ""}
        >
          <Card
            key={index}
            className={tw(
              "w-[214px] max-[768px]:w-[195px] max-[712px]:w-[185px] max-[422px]:w-[175px] max-[402px]:w-full h-[200px] !p-0",
              item.soon
                ? "cursor-not-allowed pointer-events-none"
                : "cursor-pointer"
            )}
          >
            <Box className="p-5 h-[120px] border-b border-b-sidebar" centered>
              <Image
                src={item.image}
                alt={item.label}
                width={item.size}
                height={item.size}
              />
            </Box>
            <Box className="p-4 h-auto justify-between">
              <h4 className="text-primary font-inter font-medium">
                {item.label}
              </h4>
              <Badge variant="ghost" show={item.soon as boolean}>
                Soon
              </Badge>
            </Box>
          </Card>
        </Link>
      )}
    />
  );
};

export default Mockups;
