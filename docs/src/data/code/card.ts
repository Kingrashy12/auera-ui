export const card_codes = {
  default: `import { Card, Button, Box, Media } from "auera-ui";
import { FiArrowUpRight } from "react-icons/fi";

const DefaultCardDemo = () => {
  return (
    <Card
      classNames={{
        root: "w-fit",
      }}
    >
      <Box className="gap-3 items-center">
        <Media
          src="https://fastly.picsum.photos/id/74/4288/2848.jpg?
          hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
          width={120}
          className="rounded-md"
        />

        <Box className="flex-col gap-1">
          <span className="font-poppins text-sm font-medium
           text-black theme-dark:text-white">
            Azure Bay
          </span>
          <p className="font-inter font-normal text-neutral-400
           theme-dark:text-neutral-700 text-xs">
            Lorem ipsum dolor sit amet.
          </p>
        </Box>
      </Box>

      <p className="text-neutral-500 theme-dark:text-neutral-700
       font-inter text-sm w-[300px]">
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
          className="border-red-500 text-red-500
           hover:bg-red-100 font-inter text-sm"
          radius="xl"
          variant="outline"
        >
          Decline
        </Button>
      </Box>
    </Card>
  );
};`,
  with_image: `import { Card, Button, Box } from "auera-ui";
import { FiArrowUpRight } from "react-icons/fi";
    
const CardWithImage = () => {
  return (
    <Card
      classNames={{
        root: "w-fit",
      }}
     img={{
      src: "https://fastly.picsum.photos/id/74/4288/2848.jpg?...",
      alt: "Azure Bay",
      className: "w-[380px] max-[400px]:w-auto",
    }}
    >
      <Box className="gap-3 items-center">
        <Box className="flex-col gap-1">
          <span className="font-poppins text-sm font-medium
           text-black theme-dark:text-white">
            Azure Bay
          </span>
          <p className="font-inter font-normal text-neutral-400
           theme-dark:text-neutral-700 text-xs">
            Lorem ipsum dolor sit amet.
          </p>
        </Box>
      </Box>

      <p className="text-neutral-500 theme-dark:text-neutral-700
       font-inter text-sm w-[300px]">
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
          className="border-red-500 text-red-500
           hover:bg-red-100 font-inter text-sm"
          radius="xl"
          variant="outline"
        >
          Decline
        </Button>
      </Box>
    </Card>
  );
};`,
  with_image_render: `import { Card, Button, Box } from "auera-ui";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
    
const CardWithImageRender = () => {
  return (
    <Card
      classNames={{
        root: "w-fit",
      }}
     renderImage={() => (
       <Image
         alt="Azure Bay"
         src="https://fastly.picsum.photos/id/74/4288/2848.jpg?.."
         width={300}
         height={150}
         className="max-[400px]:w-fit h-auto w-[380px]"
       />
    )}
    >
      <Box className="gap-3 items-center">
        <Box className="flex-col gap-1">
          <span className="font-poppins text-sm font-medium
           text-black theme-dark:text-white">
            Azure Bay
          </span>
          <p className="font-inter font-normal text-neutral-400
           theme-dark:text-neutral-700 text-xs">
            Lorem ipsum dolor sit amet.
          </p>
        </Box>
      </Box>

      <p className="text-neutral-500 theme-dark:text-neutral-700
       font-inter text-sm w-[300px]">
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
          className="border-red-500 text-red-500
           hover:bg-red-100 font-inter text-sm"
          radius="xl"
          variant="outline"
        >
          Decline
        </Button>
      </Box>
    </Card>
  );
};`,
  feed_card: `import { Avatar, Box, Button, Card } from "auera-ui";

const FeedCard = () => {
  return (
   <Card
     classNames={{
     root: "w-fit",
    }}
   >

   <Box className="gap-3 items-center">
    <Avatar
      src="https://fastly.picsum.photos/id/65/4912/3264.jpg?..."
      size="md"
      border
    />
    
    <Box between fullWidth>
      <Box className="flex-col gap-1">
        <span className="font-poppins text-sm font-medium text-black
         theme-dark:text-white">
          Elara Quinn
        </span>
        <p className="font-inter font-normal text-neutral-400
         theme-dark:text-neutral-600 text-xs">
          3:30 PM
        </p>
      </Box>
      
      <Button radius="full" size="xs" className="font-inter text-xs">
        Follow
      </Button>
    </Box>
  </Box>

  <p className="text-neutral-500 theme-dark:text-neutral-500 font-inter
   text-sm w-[300px]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
    laudantium nostrum minus beatae cum veritatis alias. Unde!
  </p>
  </Card>
 )
}`,

  form_card: `import {
  Box,
  Button,
  Card,
  Checkbox,
  PasswordInput,
  TextInput,
  Label,
  Media,
} from "auera-ui";
 import Link from "next/link";

const FormCard = () => {

  return (
   <Card
     classNames={{
     root: "w-fit max-w-sm rounded-[25px]",
    }}
     renderHeader={() => (
       <Box
         centered
         fullWidth
         className="flex-col gap-3 px-4 py-5 border-b theme-dark:border-neutral-800"
       >
         <Media src="/logo.png" width={50} height={50} />
         <Box className="flex-col gap-1" centered>
           <h2 className="text-2xl font-medium font-inter theme-dark:text-white">
             Sign in
           </h2>
           <p className="font-inter text-neutral-400 font-normal text-base">
             Don&apos;t have an account?{" "}
             <Link href="#" className="text-blue-500 hover:underline">
               Sign up
             </Link>
           </p>
         </Box>
       </Box>
    )}
   >
  <form className="flex flex-col gap-4 w-[290px] font-inter">
    <Box className="flex-col gap-2">
      <Label htmlFor="email" value="Your email" />
      <TextInput
        id="email"
        className="h-[42px] font-poppins text-sm"
        placeholder="johndoe@gmail.com"
        required
      />
    </Box>
    <Box className="flex-col gap-2">
      <Label htmlFor="password" value="Your password" />
      <PasswordInput
       id="password"
       className="h-[42px] font-poppins text-sm"
       placeholder=""
       required
      />
    </Box>
    <Checkbox
     size="sm"
     radius="md"
     classNames={{ container: "theme-dark:text-white" }}
    >
      Remember me
    </Checkbox>
    <Button radius="xl" fullWidth>
      Submit
    </Button>
   </form>   
  </Card>
 )
}`,
  web3_card: `import { walletProvidersImage } from "@/data/images";
import {
  Box,
  Card,
  IconButton,
  MapItems,
  Media,
} from "auera-ui";
import { IoClose } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";

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
   <Card
     classNames={{
     root: "max-w-sm !rounded-[1.8rem]",
    }}
      renderHeader={() => (
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
      )}
   >
  <MapItems
    data={providers}
    direction="column"
    className="gap-4"
    renderItem={(wallet, index) => (
      <IconButton
        className="gap-3 !justify-start"
        asChild
        radius="2xl"
        key={index}
      >
        <Media width={40} src={wallet.img} />
        <p className="font-inter font-medium">{wallet.name}</p>
        {wallet.hint && (
          <p
            className="font-poppins font-medium bg-blue-100 p-1 rounded-md
           theme-dark:bg-dark-soft-blue text-xs text-blue-500 ml-auto"
          >
            {wallet.hint}
          </p>
        )}
      </IconButton>
      )}
    />
  </Card>
 )
}`,
  pricing: `import {
  Box,
  Button,
  Card,
  Icon,
  MapItems,
  tw,
} from "auera-ui";
import { FaCircleCheck } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";


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
        <span className="ml-1 font-inter font-medium text-neutral-400
         theme-dark:text-neutral-500 text-2xl">
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
                  "line-through text-neutral-300 theme-dark:!text-neutral-600":
                    !plan.included,
                }
              )}
            >
              {plan.feature}
            </p>
          </Box>
        )}
      />
      <Button
        className="font-inter text-sm items-center"
        radius="xl"
        flavour="frost"
      >
        Buy plan
      </Button>
 </Card>
 );
};
`,
};
