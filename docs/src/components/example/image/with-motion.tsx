import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Image } from "auera-ui";
import React from "react";

const ImageWithMotion = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Image
          alt="Azure Bay"
          src={images["azure-bay"]}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            bounce: 0.4,
          }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        />
      </TabLayout>
    </CardContent>
  );
};

export default ImageWithMotion;

const code = `import { Image } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Image 
    alt="Azure Bay" 
    src={images["azure-bay"]} 
    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for smooth effect
      bounce: 0.4,
    }}
    whileHover={{ scale: 1.1, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
  />
 );
};`;
