import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import {
  Avatar,
  Box,
  Button,
  Card,
  Image,
  Skeleton,
  TabHandle,
  TabPanel,
  Tabs,
  Text,
} from "auera-ui";
import React, { useState } from "react";
import { HiChat, HiDotsVertical } from "react-icons/hi";
import { HiHeart, HiBookmark } from "react-icons/hi2";
import { IoIosShareAlt } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { tw } from "stywind";

const ReactionButton = ({
  colorScheme,
  children,
}: {
  colorScheme: "red" | "blue" | "green" | "yellow" | "gray";
  children?: React.ReactNode;
}) => {
  return (
    <Box
      className={tw("p-2 rounded-full cursor-pointer active:scale-95", {
        "hover:bg-red-100 theme-dark:hover:bg-red-800/20 text-red-600":
          colorScheme === "red",
        "hover:bg-blue-100 theme-dark:hover:bg-blue-800/20 text-blue-600":
          colorScheme === "blue",
        "hover:bg-green-100 theme-dark:hover:bg-green-800/20 text-green-600":
          colorScheme === "green",
        "hover:bg-yellow-100 theme-dark:hover:bg-yellow-800/20 text-yellow-600":
          colorScheme === "yellow",
        "hover:bg-gray-100 theme-dark:hover:bg-gray-800/20 text-neutral-800 theme-dark:text-neutral-200":
          colorScheme === "gray",
      })}
      centered
    >
      {children}
    </Box>
  );
};

const InteractivePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-4">
          <Card classNames={{ root: "rounded-xl w-[350px] max-w-[95%]" }}>
            <Box centered between>
              <Box centered className="gap-3">
                <Avatar
                  isLoading={isLoading}
                  src={images[1]}
                  border
                  size="md"
                />
                <Box className="flex-col gap-2">
                  <Text
                    className="h-4 w-24 text-sm theme-dark:text-white"
                    as="span"
                    isLoading={isLoading}
                  >
                    Elara Quinn
                  </Text>
                  <Text
                    isLoading={isLoading}
                    className="h-3 w-20 font-normal text-neutral-400 theme-dark:text-neutral-600 text-xs"
                  >
                    3:30 PM
                  </Text>
                </Box>
              </Box>
              {isLoading ? (
                <Skeleton className="h-7 w-20" radius="md" />
              ) : (
                <Button radius="full" size="xs" className="font-inter text-xs">
                  Follow
                </Button>
              )}
            </Box>
            <Image
              alt="Azure Bay"
              isLoading={isLoading}
              src={images["azure-bay"]}
              className="w-full h-28 rounded-md"
            />
            <Text
              className="w-full text-neutral-500 theme-dark:text-neutral-500 text-sm"
              isLoading={isLoading}
              height={36}
              radius="md"
            >
              A breathtaking coastal city where the ocean meets the skyline,
              offering stunning views and vibrant nightlife.
            </Text>
            {isLoading ? (
              <Skeleton className="w-full h-5" radius="md" />
            ) : (
              <Box centered between>
                <ReactionButton colorScheme="red">
                  <HiHeart size={20} />
                </ReactionButton>
                <ReactionButton colorScheme="blue">
                  <HiChat size={20} />
                </ReactionButton>
                <ReactionButton colorScheme="green">
                  <HiBookmark size={20} />
                </ReactionButton>
                <ReactionButton colorScheme="yellow">
                  <IoIosShareAlt size={20} />
                </ReactionButton>
                <ReactionButton colorScheme="gray">
                  <HiDotsVertical size={20} />
                </ReactionButton>
              </Box>
            )}
          </Card>
          <Button
            className="mt-4"
            onClick={() => setIsLoading((prev) => !prev)}
          >
            {isLoading ? "Stop Loading" : "Show Skeleton"}
          </Button>
        </TabPanel>
        <TabPanel>
          <CodeBlock fileName="" lg="tsx" code={code} />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default InteractivePost;

const code = `import { Avatar, Box, Button, Card, Image, Skeleton, Text } from "auera-ui";

const ReactionButton = ({
  colorScheme,
  children,
}: {
  colorScheme: "red" | "blue" | "green" | "yellow" | "gray";
  children?: React.ReactNode;
}) => {
  return (
    <Box
      className={tw("p-2 rounded-full cursor-pointer active:scale-95", {
        "hover:bg-red-100 theme-dark:hover:bg-red-800/20 text-red-600":
          colorScheme === "red",
        "hover:bg-blue-100 theme-dark:hover:bg-blue-800/20 text-blue-600":
          colorScheme === "blue",
        "hover:bg-green-100 theme-dark:hover:bg-green-800/20 text-green-600":
          colorScheme === "green",
        "hover:bg-yellow-100 theme-dark:hover:bg-yellow-800/20 text-yellow-600":
          colorScheme === "yellow",
        "hover:bg-gray-100 theme-dark:hover:bg-gray-800/20 text-neutral-800 theme-dark:text-neutral-200":
          colorScheme === "gray",
      })}
      centered
    >
      {children}
    </Box>
  );
};

const Demo = () => {
 return (
 <Box className="flex-col gap-4">
  <Card classNames={{ root: "rounded-xl w-[350px] max-w-[95%]" }}>
    <Box centered between>
      <Box centered className="gap-3">
        <Avatar isLoading={isLoading} src={images[1]} border size="md" />
        <Box className="flex-col gap-2">
          <Text
            className="h-4 w-24 text-sm theme-dark:text-white"
            as="span"
            isLoading={isLoading}
          >
            Elara Quinn
          </Text>
          <Text
            isLoading={isLoading}
            className="h-3 w-20 font-normal text-neutral-400 theme-dark:text-neutral-600 text-xs"
          >
            3:30 PM
          </Text>
        </Box>
      </Box>

      {isLoading ? (
        <Skeleton className="h-7 w-20" radius="md" />
      ) : (
        <Button radius="full" size="xs" className="font-inter text-xs">
          Follow
        </Button>
      )}
    </Box>

    <Image
      alt="Azure Bay"
      isLoading={isLoading}
      src={images["azure-bay"]}
      className="w-full h-28 rounded-md"
    />

    <Text
      className="w-full text-neutral-500 theme-dark:text-neutral-500 text-sm"
      isLoading={isLoading}
      height={36}
      radius="md"
    >
      A breathtaking coastal city where the ocean meets the skyline,
      offering stunning views and vibrant nightlife.
    </Text>

    {isLoading ? (
      <Skeleton className="w-full h-5" radius="md" />
    ) : (
      <Box centered between>
        <ReactionButton colorScheme="red">
          <HiHeart size={20} />
        </ReactionButton>
        <ReactionButton colorScheme="blue">
          <HiChat size={20} />
        </ReactionButton>
        <ReactionButton colorScheme="green">
          <HiBookmark size={20} />
        </ReactionButton>
        <ReactionButton colorScheme="yellow">
          <IoIosShareAlt size={20} />
        </ReactionButton>
        <ReactionButton colorScheme="gray">
          <HiDotsVertical size={20} />
        </ReactionButton>
      </Box>
    )}
  </Card>

  <Button className="mt-4" onClick={() => setIsLoading((prev) => !prev)}>
    {isLoading ? "Stop Loading" : "Show Skeleton"}
  </Button>
</Box>
 )
}`;
