import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { images } from "@/constant/images";
import { Image } from "auera-ui";
import React from "react";

const ImageDemo = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Image alt="Azure Bay" src={images["azure-bay"]} />
      </TabLayout>
    </CardContent>
  );
};

export default ImageDemo;

const code = `import { Image } from "auera-ui";
import { images } from "@/constant/images";

const Demo = () => {
 return (
  <Image alt="Azure Bay" src={images["azure-bay"]} />
 );
};`;
