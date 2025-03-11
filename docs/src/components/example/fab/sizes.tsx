import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import { Fab } from "auera-ui";
import { HiMenu } from "react-icons/hi";
import React from "react";
import For from "@/components/lib/For";
import { useDocState } from "@/hooks/docs";
import { replaceInCode } from "@/utils/global";

const FabSizes = () => {
  const { lang } = useDocState();
  return (
    <CardContent>
      <TabLayout
        code={
          lang.ext === "tsx"
            ? code
            : replaceInCode(code, "item as never", "item")
        }
        className="space-x-4 inline-flex"
      >
        <For
          each={["sm", "md", "lg", "xl", "2xl"]}
          render={(item) => (
            <Fab type="static" size={item as never}>
              <HiMenu size={20} />
            </Fab>
          )}
        />
      </TabLayout>
    </CardContent>
  );
};

export default FabSizes;

const code = `import { Fab, For } from "auera-ui";
import { HiMenu } from "react-icons/hi";

export const Demo = () => {
 return (
  <div className="space-x-4 inline-flex">
   <For
    each={["sm", "md", "lg", "xl", "2xl"]}
    render={(item) => (
      <Fab type="static" size={item as never} >
        <HiMenu size={20} />
      </Fab>
     )}
    />
  </div>
 ) 
};`;
