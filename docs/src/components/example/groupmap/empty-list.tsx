import CodeBlock from "@/components/layout/code/Block";
import CardContent from "@/components/lib/CardContent";
import { groupmap_code } from "@/data/code/groupmap";
import { notifications } from "@/data/notification";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";
import GroupMap from "@/utils/GroupMap";
import {
  Box,
  formatDate,
  StatusBadge,
  TabHandle,
  TabPanel,
  Tabs,
} from "auera-ui";
import React from "react";
import { CgList } from "react-icons/cg";
import { IoCodeSlash } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const EmptyList = () => {
  const { lang } = useDocState();
  const data: typeof notifications = [];
  return (
    <CardContent>
      <Tabs rounded variant="solid">
        <TabHandle icon={LuEye} iconSize={19} value="preview">
          Preview
        </TabHandle>
        <TabHandle icon={IoCodeSlash} value="code">
          Code
        </TabHandle>
        <TabPanel className="mt-3">
          <GroupMap
            data={data}
            showKeyOnHead
            dataMapClass="gap-3!"
            className="gap-5"
            renderKey={(key) => (
              <h1 className="font-medium font-inter text-md text-neutral-500">
                {formatDate({ date: new Date(key), format: "ddd-mmm-dd" })}
              </h1>
            )}
            renderItem={(item) => (
              <Box
                className="
                gap-2 p-4 rounded-xl cursor-pointer flex-col
                border border-neutral-200 theme-dark:border-neutral-700
                hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 
                transition-all duration-300 ease-in-out shadow-md 
                hover:shadow-lg transform mb-2 active:scale-90 drawer-demo-card
                "
              >
                <Box fullWidth className="flex justify-between items-center">
                  <p className="font-semibold text-lg text-neutral-800 theme-dark:text-white">
                    {item.title}
                  </p>
                  {!item.seen && <StatusBadge placement="right-bottom" />}
                </Box>
                <span className="text-neutral-600 text-sm theme-dark:text-neutral-500">
                  {item.message}
                </span>
              </Box>
            )}
            groupByKey={(item) => item.timestamp}
            emptyListComponent={
              <Box centered className="flex-col gap-2">
                <CgList size={50} className="theme-dark:text-neutral-300" />
                <p className="font-inter text-base font-medium text-neutral-500 theme-dark:text-neutral-700">
                  Notting is here!
                </p>
              </Box>
            }
          />
        </TabPanel>
        <TabPanel>
          <CodeBlock
            code={
              lang.ext === "tsx"
                ? groupmap_code.empty_list
                : replaceInCode(
                    groupmap_code.empty_list,
                    /: typeof notifications/g,
                    ""
                  )
            }
            fileName="groupmap/empty-list.tsx"
            lg="tsx"
          />
        </TabPanel>
      </Tabs>
    </CardContent>
  );
};

export default EmptyList;
