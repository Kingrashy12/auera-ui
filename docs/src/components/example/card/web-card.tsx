import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { card_codes } from "@/data/code/card";
import { walletProvidersImage } from "@/data/images";
import {
  Box,
  Card,
  IconButton,
  MapItems,
  Image,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { IoClose, IoCodeSlash } from "react-icons/io5";
import { LuBadgeInfo, LuEye } from "react-icons/lu";

const providers = [
  {
    name: "WalletConnect",
    img: walletProvidersImage.walletconnect,
    hint: "QR CODE",
  },
  {
    name: "MetaMask",
    img: walletProvidersImage.metamask,
    hint: "Detected",
  },
  {
    name: "Phantom",
    img: walletProvidersImage.phantom,
  },
  {
    name: "Trust Wallet",
    img: walletProvidersImage.trust_wallet,
  },
];

const Web3Card = () => {
  return (
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
              root: "max-w-sm rounded-[1.8rem]",
            }}
            header={
              <Box
                className="px-4 py-5 border-b theme-dark:border-b-neutral-900 items-center"
                between
              >
                <IconButton size="xs" radius="lg" variant="ghost">
                  <LuBadgeInfo size={20} />
                </IconButton>
                <span className="font-inter font-semibold text-black theme-dark:text-white">
                  Connect Wallet
                </span>
                <IconButton size="xs" radius="lg" variant="ghost">
                  <IoClose size={22} />
                </IconButton>
              </Box>
            }
          >
            <MapItems
              data={providers}
              direction="column"
              className="gap-4"
              renderItem={(wallet, index) => (
                <IconButton
                  className="gap-3 !justify-start"
                  as="div"
                  radius="2xl"
                  key={index}
                >
                  <Image alt={wallet.name} width={40} src={wallet.img} />
                  <p className="font-inter font-medium">{wallet.name}</p>
                  {wallet.hint && (
                    <p
                      className="font-poppins font-medium bg-blue-100 p-1 rounded-md
                     theme-dark:bgblue-800/30 text-xs text-blue-500 ml-auto"
                    >
                      {wallet.hint}
                    </p>
                  )}
                </IconButton>
              )}
            />
          </Card>
        </TabPanel>
        <TabPanel className="mt-3">
          <CodeBlock
            code={card_codes.web3_card}
            lg="tsx"
            fileName="web3-card.tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default Web3Card;
