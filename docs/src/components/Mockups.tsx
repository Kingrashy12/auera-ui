import { mockups } from "@/data/mockups";
import { Box, Card, MapItems } from "auera-ui";
import Image from "next/image";
import React from "react";

const Mockups = () => {
  const sortedItems = mockups.sort((a, b) => a.label.localeCompare(b.label));
  return (
    <MapItems
      data={sortedItems}
      className="!flex-wrap !gap-5"
      renderItem={(item, index) => (
        <Card key={index} className="w-[214px] h-[200px] !p-0">
          <Box className="p-5 h-[120px]" centered>
            <Image
              src={item.image}
              alt={item.label}
              width={item.size}
              height={item.size}
            />
          </Box>
          <Box direction="column" className="p-4 h-auto">
            <h4 className="text-primary font-inter font-medium">
              {item.label}
            </h4>
          </Box>
        </Card>
      )}
    />
  );
};

export default Mockups;
