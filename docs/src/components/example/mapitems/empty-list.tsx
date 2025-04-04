import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";
import {
  Avatar,
  Box,
  MapItems,
  Stack,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { CgList } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

type Images = { img: string }[];

const Map_EmptyList = () => {
  const { lang } = useDocState();

  return (
    <CardContent>
      <Tabs variant="solid" rounded>
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel>
          <Stack wrap align="horizontal">
            <MapItems
              data={[] as Images}
              renderItem={(image) => <Avatar src={image.img} size="md" />}
              emptyListComponent={
                <Box centered className="flex-col gap-2">
                  <CgList size={50} className="theme-dark:text-neutral-300" />
                  <p className="font-inter text-base font-medium text-neutral-500 theme-dark:text-neutral-700">
                    Notting is here!
                  </p>
                </Box>
              }
            />
          </Stack>
        </TabPanel>
        <TabPanel>
          <CodeBlock
            code={
              lang.ext === "tsx"
                ? code
                : replaceInCode(
                    code,
                    /\s*type Images = {\s*img: string\s*}\[\];\s*\n?/g,
                    " \n \n"
                  ).replace(/\s*\bas Images\b\s*/g, "")
            }
            fileName="demo.tsx"
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default Map_EmptyList;

const code = `import { Avatar, MapItems, Stack, Box } from "auera-ui";
import { CgList } from "react-icons/cg";

type Images = { img: string }[];

const Demo = () => {
 return (
  <Stack wrap align="horizontal">
    <MapItems
      data={[] as Images}
      renderItem={(image) => (
        <Avatar src={image.img} size="md" />
      )}
        emptyListComponent={
         Box centered className="flex-col gap-2">
          <CgList
            size={50}
            className="theme-dark:text-neutral-300"
          />
          <p className="font-inter text-base font-medium text-neutral-500 theme-dark:text-neutral-700">
            Notting is here!
          </p>
         </Box>
        }
    />
  </Stack>
 )
};`;
