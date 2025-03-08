import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { card_codes } from "@/data/code/card";
import { Box, Button, Card, Image, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const CardDemo = () => {
  return (
    <>
      <CardContent>
        <Tabs variant="solid" rounded containerClass="overflow-visible">
          <TabHandle icon={LuEye} iconSize={19} value="preview">
            Preview
          </TabHandle>
          <TabHandle icon={IoCodeSlash} value="code">
            Code
          </TabHandle>
          <TabPanel className="mt-3">
            <Card
              classNames={{
                root: "w-fit",
              }}
            >
              <Box className="gap-3 items-center">
                <Image
                  alt="Azure Bay"
                  src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
                  width={120}
                  className="rounded-md"
                />

                <Box className="flex-col gap-1">
                  <span className="font-poppins text-sm font-medium text-black theme-dark:text-white">
                    Azure Bay
                  </span>
                  <p className="font-inter font-normal text-neutral-400 theme-dark:text-neutral-600 text-xs">
                    Lorem ipsum dolor sit amet.
                  </p>
                </Box>
              </Box>
              <p className="text-neutral-500 theme-dark:text-neutral-500 font-inter text-sm w-[300px]">
                A breathtaking coastal city where the ocean meets the skyline,
                offering stunning views and vibrant nightlife.
              </p>
              <Box className="gap-2 items-center">
                <Button
                  radius="xl"
                  rightIcon={FiArrowUpRight}
                  className="relative font-inter text-sm"
                  rightIconSize={18}
                >
                  Visit
                </Button>
                <Button
                  className="border-red-500 text-red-500 hover:bg-red-100 font-inter text-sm"
                  radius="xl"
                  variant="outline"
                >
                  Decline
                </Button>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel>
            <CodeBlock code={card_codes.default} lg="tsx" fileName="demo.tsx" />
          </TabPanel>
        </Tabs>
      </CardContent>
    </>
  );
};

export default CardDemo;
