import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { card_codes } from "@/data/code/card";
import { Avatar, Box, Button, Card, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";

const FeedCard = () => {
  return (
    <>
      <CardContent>
        <Tabs variant="solid" rounded containerClass="overflow-visible">
          <TabHandle value="preview">Preview</TabHandle>
          <TabHandle value="code">Code</TabHandle>
          <TabPanel className="mt-3">
            <Card
              classNames={{
                root: "w-fit",
              }}
            >
              <Box className="gap-3 items-center">
                <Avatar
                  src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
                  size="md"
                  border
                />
                <Box between centered fullWidth>
                  <Box className="flex-col gap-1">
                    <span className="font-poppins text-sm font-medium text-black theme-dark:text-white">
                      Elara Quinn
                    </span>
                    <p className="font-inter font-normal text-neutral-400 theme-dark:text-neutral-600 text-xs">
                      3:30 PM
                    </p>
                  </Box>
                  <Button
                    radius="full"
                    size="xs"
                    className="font-inter text-xs"
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
              <p className="text-neutral-500 theme-dark:text-neutral-500 font-inter text-sm w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
                laudantium nostrum minus beatae cum veritatis alias. Unde!
              </p>
            </Card>
          </TabPanel>
          <TabPanel>
            <CodeBlock
              code={card_codes.feed_card}
              lg="tsx"
              fileName="card/feed-card.tsx"
            />
          </TabPanel>
        </Tabs>
      </CardContent>
    </>
  );
};

export default FeedCard;
