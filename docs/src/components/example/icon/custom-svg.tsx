import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { Icon, TabHandle, TabPanel, Tabs } from "auera-ui";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const code = `import { Icon } from "auera-ui";

const CustomSvgIcon = ({
 color = "currentColor",
 size = 24
 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CustomSvg = () => (
  <Icon
   icon={CustomSvgIcon}
   color="blue"
   size={25}
   />
);`;

const CustomSvg = () => {
  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-5">
          <Icon icon={CustomSvgIcon} color="blue" size={25} />
        </TabPanel>
        <TabPanel>
          <CodeBlock code={code} fileName="icon/custom-svg.tsx" lg="tsx" />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default CustomSvg;

const CustomSvgIcon = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
