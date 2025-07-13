import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { card_codes } from "@/data/code/card";
import {
  Box,
  Button,
  Card,
  Icon,
  MapItems,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { tw } from "stywind";

const features = [
  {
    feature: "Complete Feature Access",
    included: true,
  },
  {
    feature: "Data Storage (500GB)",
    included: false,
  },
  {
    feature: "Team Collaboration Tools",
    included: true,
  },
  {
    feature: "24/7 Priority Support",
    included: true,
  },
  {
    feature: "Advanced Security Features",
    included: true,
  },
  {
    feature: "Max 10 Team Members",
    included: true,
  },
  {
    feature: "Custom Integration Support",
    included: false,
  },
];

const PricingCard = () => {
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
                root: "max-w-[331px]",
              }}
            >
              <Box className="items-baseline">
                <span className="font-poppins theme-dark:text-white font-semibold text-3xl">
                  $
                </span>
                <h1 className="font-poppins text-5xl font-semibold theme-dark:text-white">
                  89
                </h1>
                <span className="ml-1 font-inter font-medium text-neutral-400 theme-dark:text-neutral-500 text-2xl">
                  /month
                </span>
              </Box>

              <MapItems
                data={features}
                direction="column"
                className="mt-3 gap-6"
                renderItem={(plan, index) => (
                  <Box key={index} className="gap-2 items-center">
                    <Icon
                      icon={plan.included ? FaCircleCheck : FiMinus}
                      className={tw(
                        plan.included ? "text-blue-500" : "text-neutral-500"
                      )}
                      size={18}
                    />
                    <p
                      className={tw(
                        "text-neutral-500 theme-dark:text-neutral-400 font-poppins",
                        {
                          "line-through text-neutral-300 theme-dark:text-neutral-600!":
                            !plan.included,
                        }
                      )}
                    >
                      {plan.feature}
                    </p>
                  </Box>
                )}
              />
              <Button className="font-inter text-sm items-center" radius="xl">
                Select plan
              </Button>
            </Card>
          </TabPanel>
          <TabPanel>
            <CodeBlock
              code={card_codes.pricing}
              lg="tsx"
              fileName="pricing-card.tsx"
            />
          </TabPanel>
        </Tabs>
      </CardContent>
    </>
  );
};

export default PricingCard;
