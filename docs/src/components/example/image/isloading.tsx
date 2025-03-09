import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Image } from "auera-ui";
import React from "react";

const LoadingImage = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Image
          alt="Azure Bay"
          isLoading
          width={`100%`}
          height={400}
          src={images["azure-bay"]}
        />
      </TabLayout>
    </CardContent>
  );
};

export default LoadingImage;

const code = `import { Image } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Image
   alt="Azure Bay"
    isLoading
    width={\`100%\`}
    height={400}
    src={images["azure-bay"]}
  />
 );
};`;
