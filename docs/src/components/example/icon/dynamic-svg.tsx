import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Icon, TabHandle, TabPanel, Tabs } from "auera-ui";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const code = `import { Icon } from "auera-ui";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const DynamicIcon = () => {
const [isFavorite, setIsFavorite] = useState(false);

return (
 <Icon
   icon={isFavorite ? FaHeart : FaRegHeart}
   color="red"
   size={25}
   onClick={() => setIsFavorite(!isFavorite)}
 />
 );
};`;

const DynamicSvg = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle value="preview">Preview</TabHandle>
        <TabHandle value="code">Code</TabHandle>
        <TabPanel className="mt-5">
          <Icon
            icon={isFavorite ? FaHeart : FaRegHeart}
            color="red"
            size={25}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="icon/dynamic-svg.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default DynamicSvg;
